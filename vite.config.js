import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte', 'svelte-carousel'],
					styles: ['@fontsource/darker-grotesque']
				}
			}
		},
		sourcemap: true
	},
	optimizeDeps: {
		include: ['svelte-carousel']
	}
});
