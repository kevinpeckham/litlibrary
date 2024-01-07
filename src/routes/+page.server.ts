// types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	// get content and utils from locals
	const { content, utils } = locals;

	// use get util to unpack home content store
	const home = utils.get(content.homeContentStore);
	console.log({ home });
	// unpack home content buckets
	const { body, meta } = home;

	// set page metadata
	// passing it here will set it in the head of the page -- see +layout.svelte
	const metaDescription = meta.description;
	const metaTitle = meta.title;

	return {
		body,
		metaDescription,
		metaTitle,
	};
};
