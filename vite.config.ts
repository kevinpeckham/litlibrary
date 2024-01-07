import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export const config = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});

export default config;
