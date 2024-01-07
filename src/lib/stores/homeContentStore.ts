import { writable, derived, type Readable } from "svelte/store";

// import raw data from homeContent.json
import { default as rawContent } from "$data/home.json";

// the raw types for the raw data store
interface HomeRawContent {
	[key: string]: unknown;
	body: {
		[key: string]: string;
		headline: string;
		text: string;
	};
	meta: {
		[key: string]: string;
		description: string;
		title: string;
	};
}

// the processed / safe types coming out of the derived store
interface HomeContent {
	[key: string]: unknown;
	body: {
		[key: string]: string;
		headline: string;
		text: string;
	};
	meta: {
		[key: string]: string;
		description: string;
		title: string;
	};
}

// raw data store
export const homeContentRawStore = writable(rawContent as HomeRawContent);

// derived store
export const homeContentStore: HomeContentStore = derived(
	homeContentRawStore,
	($homeContentRawStore: HomeRawContent) => {
		return $homeContentRawStore as HomeContent;
	},
);

// export data store type
export type HomeContentStore = Readable<HomeContent>;
