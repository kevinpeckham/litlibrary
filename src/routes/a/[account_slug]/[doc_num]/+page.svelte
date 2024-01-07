

<!--
	@component
	Here's some documentation for this component.
-->

<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<template lang="pug">
	div Hello
	div Account: { data.account_slug }, Document:{ data.doc_num }
	|</template>
