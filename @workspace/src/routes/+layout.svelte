<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getOrganizationJsonLd } from '$lib/seo';

	let { children } = $props();
	
	const orgScript = getOrganizationJsonLd();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="We build software products and partner with individuals and businesses to deliver development and consulting services." />
	<link rel="icon" href="/favicon.svg" />
	{@html orgScript}
</svelte:head>

{@render children()}
