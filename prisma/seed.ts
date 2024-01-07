import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const accountData: Prisma.AccountCreateInput[] = [
	{
		id: "VYQnUKSBowWeme0rmbZ7W",
		name: "SecureLogix",
	},
];

const rolesData: Prisma.RoleCreateInput[] = [
	{
		id: "GUJgMyn4ISdG3jR5EraVK",
		name: "admin",
		account: {
			connect: {
				id: "VYQnUKSBowWeme0rmbZ7W",
			},
		},
	},
	{
		id: "eEeauCVrZCMsHtvc4gW2o",
		name: "user",
		account: {
			connect: {
				id: "VYQnUKSBowWeme0rmbZ7W",
			},
		},
	},
];

const userData: Prisma.UserCreateInput[] = [
	{
		id: "lSbuRt4IJri3VUmCqzVEV",
		name_first: "Kevin",
		name_last: "Peckham",
		email: "kevin@lightningjar.com",
		account: {
			connect: {
				id: "VYQnUKSBowWeme0rmbZ7W",
			},
		},
	},
];

const connectSLX = {
	account: {
		connect: {
			id: "VYQnUKSBowWeme0rmbZ7W",
		},
	},
};

const categoriesData: Prisma.CategoryCreateInput[] = [
	{
		id: "0L7BsYn_qqGrsRoIPAOU5",
		namePlural: "Unknown",
		nameSingular: "Unknown",
		...connectSLX,
	},
	{
		id: "vO8_PkG3Iuoqwt2ERx8XJ",
		namePlural: "Battlecards",
		nameSingular: "Battlecard",
		...connectSLX,
	},
	{
		id: "kLSGnnSTfqvMsh45CUlAL",
		namePlural: "Customer Stories",
		nameSingular: "Customer Story",
		...connectSLX,
	},
	{
		id: "BJHW_IzyhWyW0-jQZKxka",
		namePlural: "Datasheets",
		nameSingular: "Datasheet",
		...connectSLX,
	},
	{
		id: "L3C_seT4eWM6NyAgahqrc",
		namePlural: "Infographics",
		nameSingular: "Infographic",
		...connectSLX,
	},
	{
		id: "COqYLb2gazN58qV5iIpZ0",
		namePlural: "Brochures",
		nameSingular: "Brochure",
		...connectSLX,
	},
	{
		id: "8ecw033HRdA8ITNmohuxD",
		namePlural: "Playbooks",
		nameSingular: "Playbook",
		...connectSLX,
	},
	{
		id: "i5K2ltcZHl-CwK1RfRp7y",
		namePlural: "Presentations",
		nameSingular: "Presentation",
		...connectSLX,
	},
	{
		id: "3Jk_IuAWIzaOm4lZ_j8hb",
		namePlural: "FAQs",
		nameSingular: "FAQ",
		...connectSLX,
	},
	{
		id: "YdVqnRELYt52hooLp8AP2",
		namePlural: "Flyers",
		nameSingular: "Flyer",
		...connectSLX,
	},
	{
		id: "VrXSVKbxIK_aWmS52DZOX",
		namePlural: "Whitepapers",
		nameSingular: "Whitepaper",
		...connectSLX,
	},
	{
		id: "r3lADkNAHim6YFz90FJsU",
		namePlural: "Technical Briefs",
		nameSingular: "Technical Brief",
		...connectSLX,
	},
	{
		id: "t3x3ZOyF6vmJ4ZYPqpXSs",
		namePlural: "Technical Discussions",
		nameSingular: "Technical Discussion",
		...connectSLX,
	},
];

const editionsData: Prisma.EditionCreateInput[] = [
	{
		id: "S9Jy0XhGYNQIqcSCQQAFW",
		name: "Verizon",
		slug: "verizon",
		short_slug: "vrz",
		...connectSLX,
	},
	{
		id: "aLuQUvpNsDikbSOMt9sEY",
		name: "ATT",
		slug: "att",
		short_slug: "att",
		...connectSLX,
	},
	{
		id: "ACgRZko6ITD_T85gmOKqa",
		name: "T-Mobile",
		slug: "t-mobile",
		short_slug: "tmo",
		...connectSLX,
	},
];

const tagsData: Prisma.TagCreateInput[] = [
	{
		id: "D4AhQef61xSQyNlLC6FBj",
		name: "Call Security",
		synonyms: ["Voice Security", "Call Security", "Voice Network Security"],
		...connectSLX,
	},
	{
		id: "1oPCDVSPB-KqpAy9w3Ufu",
		name: "Call Authentication",
		synonyms: [
			"Call Verification",
			"Caller Authentication",
			"Caller Verification",
		],
		...connectSLX,
	},
	{
		id: "SZao1mmuvm7FlJwB9hk6s",
		name: "Call Defense",
		...connectSLX,
	},
	{
		id: "G6_f_w2OlIah1_7fWwLco",
		name: "Orchestra One",
		...connectSLX,
	},
	{
		id: "THpClENO_F5HxFtJIOhjg",
		name: "Reputation Defense",
		...connectSLX,
	},
	{
		id: "8vhIQoC_QpvvQDwNNZ-Z3",
		name: "TrueCall",
		...connectSLX,
	},
	{
		id: "_XKCPrVzWL5UoNGosw8L1",
		name: "Contact",
		...connectSLX,
	},
];

async function main() {
	// create account
	const existingAccounts = await prisma.account.findMany();
	if (existingAccounts.length === 0) {
		for (const a of accountData) {
			const account = await prisma.account.create({
				data: a,
			});
		}
	} else {
		console.log("accounts already exist");
	}

	// create roles
	const existingRoles = await prisma.role.findMany();
	if (existingRoles.length === 0) {
		for (const r of rolesData) {
			const role = await prisma.role.create({
				data: r,
			});
		}
	}

	// create user
	const existingUsers = await prisma.user.findMany();
	if (existingUsers.length === 0) {
		for (const u of userData) {
			const user = await prisma.user.create({
				data: u,
			});
		}
	} else {
		console.log("users already exist");
	}

	// create categories
	const existingCategories = await prisma.category.findMany();
	if (existingCategories.length === 0) {
		for (const c of categoriesData) {
			const category = await prisma.category.create({
				data: c,
			});
		}
	} else {
		console.log("categories already exist");
	}

	// create editions
	const existingEditions = await prisma.edition.findMany();
	if (existingEditions.length === 0) {
		for (const e of editionsData) {
			const edition = await prisma.edition.create({
				data: e,
			});
		}
	} else {
		console.log("editions already exist");
	}

	// create tags
	const existingTags = await prisma.tag.findMany();
	if (existingTags.length === 0) {
		for (const t of tagsData) {
			const tag = await prisma.tag.create({
				data: t,
			});
		}
	} else {
		console.log("tags already exist");
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
