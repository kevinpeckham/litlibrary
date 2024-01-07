<!--
@component
An <a> styled to look like a button.
* prop classes: string; (optional) -- additional classes;
* prop cta: Link;
* cta.href: string;
* cta.label: string;
* cta.rel: string;
* cta.target: string;
* slot (optional) -- link text
-->
<script lang="ts">
	// types
	import type { Link } from "$types/Link";

	// props
	export let classes = "";
	export let cta: Link;
	$: href = cta.href ?? null;
	$: label = cta.label ?? "";
	$: rel = cta.rel ?? null;
	$: target = cta.target ?? null;
	$: title = cta.title ?? "";
</script>

<template lang="pug">
	a(
		class!=`
			bg-transparent
			block
			hover:bg-accent
			hover:outline-transparent
			hover:text-primary
			max-w-fit
			outline-current
			outline
			px-5
			py-[.75ch]
			rounded
			text-[.85em]
			transition-all
			{ classes }`,
		href!="{ href }",
		rel!="{ rel }",
		target!="{ target }",
		title!="{ title }") { label }
		//- slot
		slot

	|</template>
