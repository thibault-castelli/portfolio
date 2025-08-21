import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { BYPASS_TOKEN } from '$env/static/private';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	isr: {
		expiration: 60,
		bypassToken: BYPASS_TOKEN,
		allowQuery: ['search']
	},
	kit: {
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['example-app.vercel.app']
			}
		})
	}
};

export default config;
