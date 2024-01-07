// a great place to put types that are used in multiple places
export interface Link {
	[key: string]: unknown;
	label: string;
	href: string;
	rel?: string;
	target?: string;
	title?: string;
}
