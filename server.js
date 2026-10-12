import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createRequestHandler } from '@react-router/express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

// 1. Serve static client assets from dist/client
app.use(express.static(path.join(__dirname, 'dist', 'client'), {
  maxAge: '1h',
  immutable: false,
}));

// 2. Wrap async import in a request handler function without top-level await
let buildPromise = null;
function getBuild() {
  if (!buildPromise) {
    buildPromise = import('./dist/server/index.js');
  }
  return buildPromise;
}

app.all('/{*splat}', async (req, res, next) => {
  try {
    const build = await getBuild();
    const handler = createRequestHandler({
      build,
      mode: process.env.NODE_ENV || 'production',
    });
    return handler(req, res, next);
  } catch (error) {
    next(error);
  }
});

// 3. Immediately call listen() synchronously on startup
const server = app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

['SIGTERM', 'SIGINT'].forEach((signal) => {
  process.once(signal, () => server.close(console.error));
});
