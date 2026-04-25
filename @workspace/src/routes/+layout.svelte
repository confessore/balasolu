<script lang="ts">
	import './layout.css';
	import { getOrganizationJsonLd } from '$lib/seo';

	let { children } = $props();
	
	const orgScript = getOrganizationJsonLd();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="We build software products and partner with individuals and businesses to deliver development and consulting services." />
	{@html orgScript}
</svelte:head>

{@render children()}
