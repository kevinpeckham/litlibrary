// prerender: true
export const prerender = true;

// types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params, url }) {
	// slug, category, and pathname from params and url
	const { account_slug } = params;

	// unpack content and utils from locals
	const { content, utils } = locals;

	// if document or edition is invalid, return 404
	if (account_slug != "slx") {
		throw utils.error(404, { message: "Account not found" });
	}

	return {
		account_slug,
	};
};
