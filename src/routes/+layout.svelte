<script lang="ts">
	import "../app.css";

	// import child page data
	import { page } from "$app/stores";

	// import data type for layout data
	// import type { LayoutData } from "./$types";

	// catch data
	// export let data: LayoutData;
</script>

<template lang="pug">
	//- head metadata, insterted using data from +layout.ts
	svelte:head
		+if('$page.data.metaTitle')
			title { $page.data.metaTitle }
		+if('$page.data.metaDescription')
			meta(
				content!="{ $page.data.metaDescription }",
				name="description")

	slot

	|</template>
