<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// context api
	import { getContext } from "svelte";

	// components
	import LogoBlock from "$molecules/LogoBlock.svelte";

	const brands = getContext("brands") ?? [];
</script>

<template lang="pug">
	header(
		class=`
			mb-[2ch]
			px-8
			gap-x-8
			grid
			grid-cols-2
			sm:gap-x-0
			sm:gap-y-[1ch]
			sm:grid-cols-7
			sm:px-0`)
		|
		+each('brands as brand, index')
			//- logo
			LogoBlock(
				brand!="{ brand }")

			//- plus sign
			svelte:element(
				class="hidden place-content-center sm:grid",
				this!="{ index != brands.length - 1 ? 'div' : null }") +</template>
