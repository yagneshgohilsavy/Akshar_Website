import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createRequestHandler } from '@react-router/express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

// 1. Immediately call listen() so Hostinger's healthcheck detects it within 3 seconds
const server = app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// 2. Serve static client assets from dist/client
app.use(express.static(path.join(__dirname, 'dist', 'client'), {
  maxAge: '1h',
  immutable: false,
}));

// 3. Load React Router server build and handle all requests
const build = await import('./dist/server/index.js');

app.all(
  '/{*splat}',
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV || 'production',
  })
);

['SIGTERM', 'SIGINT'].forEach((signal) => {
  process.once(signal, () => server.close(console.error));
});
