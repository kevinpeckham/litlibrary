<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<template lang="pug">
	div Hello { data.account_slug }
	|</template>
