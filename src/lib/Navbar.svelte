<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let isMenuOpen = $state(false);
	let previousPath = $state('/');

	// Close mobile menu when navigating to a different path
	$effect(() => {
		const currentPath = $page.url.pathname;
		if (currentPath !== previousPath && isMenuOpen) {
			isMenuOpen = false;
		}
		previousPath = currentPath;
	});

	function navigateTo(path: string) {
		goto(path);
		isMenuOpen = false;
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur-sm"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<div class="flex items-center space-x-3">
			<img src="/favicon.svg" alt="Balanced Solutions" class="h-6 w-6" />
			<span
				class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-bold text-transparent"
				>Balanced Solutions</span
			>
		</div>

		<!-- Desktop Navigation -->
		<div class="hidden items-center space-x-4 md:flex">
			<a href="/" class="text-sm font-medium text-slate-300 transition-colors hover:text-white"
				>Home</a
			>
			<a href="/about" class="text-sm font-medium text-slate-300 transition-colors hover:text-white"
				>About</a
			>
			<a
				href="/services"
				class="text-sm font-medium text-slate-300 transition-colors hover:text-white">Services</a
			>
			<a
				href="/contact"
				class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
			>
				Get in Touch
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="rounded-lg p-2 transition-colors hover:bg-slate-800 md:hidden"
			onclick={() => (isMenuOpen = !isMenuOpen)}
			aria-expanded={isMenuOpen}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if isMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="animate-in slide-in-from-top-2 absolute top-full right-0 left-0 border-b border-slate-800 bg-slate-900 p-6 duration-200 md:hidden"
		>
			<div class="flex flex-col space-y-4">
				<a
					href="/"
					class="py-2 text-lg font-medium text-slate-300 transition-colors hover:text-white"
					onclick={() => navigateTo('/')}>Home</a
				>
				<a
					href="/about"
					class="py-2 text-lg font-medium text-slate-300 transition-colors hover:text-white"
					onclick={() => navigateTo('/about')}>About</a
				>
				<a
					href="/services"
					class="py-2 text-lg font-medium text-slate-300 transition-colors hover:text-white"
					onclick={() => navigateTo('/services')}>Services</a
				>
				<a
					href="/contact"
					class="rounded-lg bg-blue-600 px-5 py-3 text-center text-lg font-medium text-white transition-colors hover:bg-blue-500"
					onclick={() => navigateTo('/contact')}
				>
					Get in Touch
				</a>
			</div>
		</div>
	{/if}
</nav>
