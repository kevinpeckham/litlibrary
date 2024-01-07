// our team uses vercel by default
// if you want to use another adapter, you can import it here and change the adapter property in the kit object
// import adapter from "@sveltejs/adapter-auto";
import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
	kit: {
		adapter: vercel({
			// make explicit -- vercel does not yet support later node versions (yet)
			runtime: "nodejs18.x",
		}),
		// these aliases allow referencing files in the src/lib folder without relative paths
		// e.g. import { myComponent } from '$components'
		// see https://kit.svelte.dev/docs/configuration#alias for more info
		alias: {
			$atoms: "./src/lib/components/atoms",
			$assets: "./src/lib/assets",
			$components: "./src/lib/components",
			$data: "./src/lib/data",
			$molecules: "./src/lib/components/molecules",
			$organisms: "./src/lib/components/organisms",
			$settings: "./src/lib/settings",
			$stores: "./src/lib/stores",
			$tools: "./src/lib/components/tools",
			$types: "./src/lib/types",
			$utils: "./src/lib/utils",
			$widgets: "./src/lib/components/widgets",
		},
	},
};

export default config;
