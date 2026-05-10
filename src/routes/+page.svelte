<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Balanced Solutions Software — Software Development & Consulting',
		description:
			'We build software products and partner with individuals and businesses to deliver development and consulting services. Custom development, cloud migration, system integration, and team augmentation.',
		canonicalUrl: getBaseUrl(),
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [{ name: 'Home', url: '/' }]
	};
</script>

<svelte:head>
	{@html getSeoHead(seoConfig)}
</svelte:head>

<div
	class="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-blue-500 selection:text-white"
>
	<!-- Hero Section -->
	<section class="px-6 pt-32 pb-20">
		<div class="mx-auto max-w-6xl">
			<div class="grid items-center gap-12 md:grid-cols-2">
				<div>
					<div
						class="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400"
					>
						<svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10.622a1 1 0 01-1.42.573l-3.715.743a1 1 0 01-.832-1.629L11.3 1.046zm3.388 9.427l-1.57-1.57a1 1 0 01-1.42-.573l-3.715-3.715a1 1 0 01-.573-1.42l1.57-1.57a1 1 0 011.42.573l1.022 1.022 4.31-4.31a1 1 0 011.42 0l4.559 4.559a1 1 0 010 1.42l-4.31 4.31z"
								clip-rule="evenodd"
							/>
						</svg>
						Product Builders & Consultants
					</div>
					<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
						Software Development
						<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
							>& Consulting</span
						>
					</h1>
					<p class="mb-8 text-xl text-slate-400">
						We build our own software products and partner with individuals and businesses to
						deliver development and consulting services.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="/contact"
							class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
						>
							Start Your Project
						</a>
						<a
							href="/about"
							class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
						>
							Learn More
						</a>
					</div>
				</div>
				<div class="relative">
					<div
						class="flex aspect-square items-center justify-center rounded-2xl border border-slate-700/50 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-8"
					>
						<div class="text-center">
							<div
								class="mb-6 inline-flex h-32 w-32 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10"
							>
								<svg
									class="h-16 w-16 text-blue-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<p class="mb-2 text-2xl font-bold text-white">Products & Partnerships</p>
							<p class="text-slate-400">Built by Engineers</p>
						</div>
					</div>
					<div
						class="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"
					></div>
					<div
						class="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about-section" class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">What We Do</h2>
				<p class="mx-auto max-w-2xl text-slate-400">
					We're a software company that builds our own products and partners with individuals and
					businesses. We offer development and consulting services to help bring your ideas to life.
				</p>
			</div>

			<div class="mb-16 grid gap-8 md:grid-cols-3">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-colors hover:border-blue-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
						<svg
							class="h-6 w-6 text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Custom Development</h3>
					<p class="text-sm text-slate-400">
						We build software from the ground up — tailored to your needs, designed to scale.
					</p>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-colors hover:border-blue-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
						<svg
							class="h-6 w-6 text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Consulting</h3>
					<p class="text-sm text-slate-400">
						Strategic guidance on architecture, technology choices, and project planning.
					</p>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-colors hover:border-blue-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
						<svg
							class="h-6 w-6 text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Security-First</h3>
					<p class="text-sm text-slate-400">
						We build with security in mind, following industry-standard practices.
					</p>
				</div>
			</div>

			<div
				class="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-8"
			>
				<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div>
						<h3 class="mb-2 text-xl font-semibold">Our Approach</h3>
						<p class="mb-4 text-slate-400">
							We combine the discipline of product development with the flexibility of consulting.
							Whether you need a full build, ongoing partnership, or expert advice — we deliver.
						</p>
						<ul class="space-y-2 text-sm text-slate-400">
							<li class="flex items-center">
								<svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Product development mindset
							</li>
							<li class="flex items-center">
								<svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Flexible engagement models
							</li>
							<li class="flex items-center">
								<svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Transparent communication
							</li>
							<li class="flex items-center">
								<svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Long-term partnership focus
							</li>
						</ul>
					</div>
					<div class="md:text-right">
						<p class="text-2xl font-bold text-white">Product-First</p>
						<p class="text-sm text-slate-400">Development & Consulting</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Our Services</h2>
				<p class="text-slate-400">
					Development and consulting services for individuals and businesses
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
						<svg
							class="h-6 w-6 text-indigo-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Custom Development</h3>
					<p class="mb-4 text-sm text-slate-400">
						Bespoke software solutions built for your specific needs.
					</p>
					<a href="/services/development" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
						<svg
							class="h-6 w-6 text-violet-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Cloud Migration</h3>
					<p class="mb-4 text-sm text-slate-400">
						Migrate to AWS with security and compliance in mind.
					</p>
					<a href="/services/cloud-migration" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
						<svg
							class="h-6 w-6 text-purple-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828l-4.586 4.586a2 2 0 01-2.828 0l-4.586-4.586a2 2 0 010-2.828z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">System Integration</h3>
					<p class="mb-4 text-sm text-slate-400">
						Connect your systems with APIs, microservices, and messaging platforms.
					</p>
					<a href="/services/integration" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10">
						<svg
							class="h-6 w-6 text-pink-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Data Analytics</h3>
					<p class="mb-4 text-sm text-slate-400">
						Build data pipelines and analytics platforms for your business.
					</p>
					<a href="/services/data-analytics" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10">
						<svg
							class="h-6 w-6 text-rose-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.30a18.014 18.014 0 00-3.382-9.606m3.856 5.924a6.012 6.012 0 019.727 2.508l1.79 3.446"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Quality Assurance</h3>
					<p class="mb-4 text-sm text-slate-400">
						Testing and CI/CD pipelines to ensure your software is production-ready.
					</p>
					<a href="/services/qa" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
						<svg
							class="h-6 w-6 text-orange-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Team Augmentation</h3>
					<p class="mb-4 text-sm text-slate-400">
						Scale your team with our engineers on a flexible, contract basis.
					</p>
					<a href="/services/augmentation" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-3xl font-bold">Why Partner With Us</h2>
			<p class="mx-auto mb-12 max-w-2xl text-slate-400">
				We build products and partner with businesses — we understand both sides because it's what
				we do.
			</p>

			<div class="grid gap-8 md:grid-cols-2">
				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<h3 class="mb-4 text-xl font-semibold">What We Build</h3>
					<ul class="space-y-3 text-slate-400">
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Our own software products</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Custom solutions for clients</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Scalable, maintainable systems</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Modern tech stacks</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Clean, documented code</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<h3 class="mb-4 text-xl font-semibold">How We Partner</h3>
					<ul class="space-y-3 text-slate-400">
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Flexible engagement models</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Transparent communication</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Long-term partnership focus</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Expert guidance at every stage</span>
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Individuals and businesses welcome</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="contact-section" class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Ready to Build Something Together?</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Whether you need a full build, ongoing partnership, or expert advice — we're here to help.
				Contact us today to discuss your needs.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
				>
					Get in Touch
				</a>
				<a
					href="tel:+13522343458"
					class="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
				>
					Call Us
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-slate-800 px-6 py-12">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 grid gap-8 md:grid-cols-4">
				<div class="md:col-span-2">
					<div class="mb-4 flex items-center space-x-3">
						<img src="/favicon.svg" alt="Balanced Solutions" class="h-6 w-6" />
						<span
							class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-bold text-transparent"
						>
							Balanced Solutions
						</span>
					</div>
					<p class="max-w-md text-slate-400">
						We build software products and partner with individuals and businesses to deliver
						development and consulting services.
					</p>
				</div>
				<div>
					<h3 class="mb-4 font-semibold text-white">Services</h3>
					<ul class="space-y-2 text-slate-400">
						<li>
							<a href="/services/development" class="transition-colors hover:text-blue-400"
								>Custom Development</a
							>
						</li>
						<li>
							<a href="/services/cloud-migration" class="transition-colors hover:text-blue-400"
								>Cloud Migration</a
							>
						</li>
						<li>
							<a href="/services/integration" class="transition-colors hover:text-blue-400"
								>System Integration</a
							>
						</li>
						<li>
							<a href="/services/data-analytics" class="transition-colors hover:text-blue-400"
								>Data Analytics</a
							>
						</li>
						<li>
							<a href="/services/qa" class="transition-colors hover:text-blue-400">QA</a>
						</li>
						<li>
							<a href="/services/augmentation" class="transition-colors hover:text-blue-400"
								>Team Augmentation</a
							>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-4 font-semibold text-white">Company</h3>
					<ul class="space-y-2 text-slate-400">
						<li><a href="/about" class="transition-colors hover:text-blue-400">About Us</a></li>
						<li><a href="/services" class="transition-colors hover:text-blue-400">Services</a></li>
						<li><a href="/contact" class="transition-colors hover:text-blue-400">Contact</a></li>
						<li>
							<a href="/privacy" class="transition-colors hover:text-blue-400">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
				<p>&copy; {new Date().getFullYear()} Balanced Solutions Software. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
