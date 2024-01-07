<!--
@component
Web footer component
* prop author: Link -- link to author's website
* prop org: Link -- link to organization's website
-->
<script lang="ts">
	// types
	import type { Link } from "$types/Link";
	export let author: Link | null = null;
	export let org: Link | null = null;

	// items for iteration
	$: items = [author, org];
</script>

<template lang="pug">
	footer(
		class=`
			flex
			justify-center
			pb-24
			text-[0.75em]`)
		+each('items as item, index')
			//- text
			span
				+html(' index === 0 ? "Created by&nbsp;" : "&nbsp;@&nbsp;" ')
			//- link
			a(
				href!="{ item.href ?? null }",
				rel!="{ item.rel ?? null }",
				target!="{ item.target ?? null }",
				title!="{ item.title ?? null }") { item.label }

	|</template>

<style lang="postcss">
	span,
	a {
		@apply opacity-70;
	}
	a {
		@apply underline-offset-4 transition-opacity;
	}
	a:hover {
		@apply text-accent underline opacity-90;
	}
</style>
