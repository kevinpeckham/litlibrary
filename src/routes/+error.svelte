<script lang="ts">
	// sveltekit error page documentation here:
	// https://kit.svelte.dev/docs/routing#error

	// import from svelte
	import { page } from "$app/stores";
	import ButtonLink from "$atoms/ButtonLink.svelte";

	const cta = {
		label: "Go Home",
		href: "/",
		rel: "home",
		target: "_self",
		title: "Go Home",
	};
</script>

<template lang="pug">
	main(
		class=`
			gap-y-[.5ch]
			grid
			grid-cols-1
			h-screen
			leading-snug
			place-content-center
			place-items-center
			`)
		h1.text-36.text-accent { $page.status }:&nbsp;{ $page.error.message }
		p.mb-6 Looks like you hit a dead end. Sorry about that.

		ButtonLink(
			cta!="{ cta }")

	|</template>
