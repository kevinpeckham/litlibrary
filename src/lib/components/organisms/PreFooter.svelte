<!--
@component
Prefooter contains a single linked call to action.
* prop cta: object
* cta.href: string
* cta.label: string
* cta.rel: string
* cta.target: string
* cta.title: string
-->
<script lang="ts">
	// types
	import type { Link } from "$types/Link";

	export let cta: Link;
	$: href = cta.href ?? null;
	$: label = cta.label ?? "";
	$: target = cta.target ?? null;
	$: rel = cta.rel ?? null;
	$: title = cta.title ?? null;
</script>

<template lang="pug">
	aside
		a(
			class=`
				sm:absolute
				`,
			href!="{ href }",
			rel!="{ rel }",
			target!="{ target }",
			title!="{ title }") { label }

	//- keep empty string '|'  before closing template tag
	//- at least until the prettier-plugin-pug bug is fixed
	|</template>

<style lang="postcss">
	a {
		@apply bg-white/5
			bottom-0
			left-0
			right-0
			flex
			italic
			justify-center
			opacity-90
			p-4
			m-[0_16px_24px]
			rounded
			text-center
			text-[.825rem]
			transition-all;
	}
	a:hover {
		@apply opacity-100
			text-accent
			underline
			underline-offset-4;
	}
</style>
