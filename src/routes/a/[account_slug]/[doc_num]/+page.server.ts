// prerender: true
export const prerender = true;

// prisma
import prisma from "$lib/prisma";

// types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params }) {
	// slug, category, and pathname from params and url
	const { account_slug, doc_num } = params;

	// account
	const account = await prisma.account.findUnique({
		where: { slug: account_slug },
		include: {
			documents: {
				where: { number: Number(doc_num) },
				include: {
					versions: {
						include: {
							pages: true,
						},
					},
				},
			},
		},
	});

	// unpack content and utils from locals
	const { content, utils } = locals;

	// if account is invalid, return 404
	if (!account || doc_num != "3017") {
		console.log("Document could not be found");
		throw utils.error(404, { message: "Document not found" });
	} else {
		console.log(account.documents[0].versions[0]);
	}

	return {
		account,
		account_slug,
		doc_num,
	};
};
