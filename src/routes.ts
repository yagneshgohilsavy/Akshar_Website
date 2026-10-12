import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('about', 'routes/about.tsx'),
	route('whyakshar', 'routes/whyakshar.tsx'),
	route('clinic', 'routes/clinic.tsx'),
	route('compliance', 'routes/compliance.tsx'),
	route('health-packages', 'routes/health-packages.tsx'),
	route('branches', 'routes/branches.tsx'),
	route('contact', 'routes/contact.tsx'),
 route('product/:handle', 'routes/product.$handle.tsx'),
 route('enquiry', 'routes/enquiry.tsx'),
 route('checkout/success', 'routes/checkout.success.tsx'),
 route('checkout/cancelled', 'routes/checkout.cancelled.tsx'),
 route('llms.txt', 'routes/llms.txt.ts'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
