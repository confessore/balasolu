<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Services — Balanced Solutions Software',
		description:
			'Explore our engineering services: custom development, cloud migration, system integration, data analytics, QA, and team augmentation. Built with product-quality engineering standards.',
		canonicalUrl: getBaseUrl() + '/services',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Services', url: '/services' }
		]
	};
</script>

<svelte:head>
	{@html getSeoHead(seoConfig)}
</svelte:head>

<div
	class="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-blue-500 selection:text-white"
>
	<!-- Page Header -->
	<section class="bg-gradient-to-b from-slate-900 to-slate-800 px-6 pt-32 pb-16">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">
				Our Services
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
					>& Expertise</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Development and consulting services for individuals and businesses. We bring product-quality
				engineering standards to every project.
			</p>
		</div>
	</section>

	<!-- Services Grid -->
	<section id="services" class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Custom Development -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 transition-transform group-hover:scale-110"
					>
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
					<h3 class="mb-3 text-xl font-semibold">Custom Development</h3>
					<p class="mb-4 text-slate-400">
						Bespoke software solutions built with product-quality engineering and scalability in
						mind. We design systems that grow with your business.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Greenfield & brownfield projects
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Microservices architecture
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Legacy modernization
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						Discuss Your Project
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>

				<!-- Cloud Migration -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 transition-transform group-hover:scale-110"
					>
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
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Cloud Migration</h3>
					<p class="mb-4 text-slate-400">
						Seamless migration to AWS with security, compliance, and optimization. We minimize
						downtime during the transition.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							AWS
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Lift-and-shift to refactor
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Cost optimization
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						Start Migration
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>

				<!-- System Integration -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 transition-transform group-hover:scale-110"
					>
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
								d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">System Integration</h3>
					<p class="mb-4 text-slate-400">
						Connect disparate systems seamlessly. We build APIs, event-driven architectures, and
						messaging solutions that make systems work together.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							REST & GraphQL APIs
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Event streaming (Kafka, RabbitMQ)
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Enterprise ERP/CRM integration
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						Explore Integration
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>

				<!-- Data Analytics -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 transition-transform group-hover:scale-110"
					>
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
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Data Analytics</h3>
					<p class="mb-4 text-slate-400">
						Build powerful data pipelines and analytics platforms with enterprise-grade security.
						Transform raw data into actionable insights.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							ETL/ELT pipelines
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Data warehousing
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Real-time analytics
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						View Solutions
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>

				<!-- Quality Assurance -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10 transition-transform group-hover:scale-110"
					>
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
								d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Quality Assurance</h3>
					<p class="mb-4 text-slate-400">
						Rigorous testing procedures and CI/CD pipelines to ensure your code is production-ready
						before deployment.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Automated testing suites
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Performance testing
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Security testing & SAST/DAST
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						Learn About QA
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>

				<!-- Team Augmentation -->
				<div
					class="group rounded-xl border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 transition-transform group-hover:scale-110"
					>
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
					<h3 class="mb-3 text-xl font-semibold">Team Augmentation</h3>
					<p class="mb-4 text-slate-400">
						Scale your engineering team with our engineers on a flexible, contract basis. We
						integrate seamlessly and deliver immediately.
					</p>
					<ul class="mb-6 space-y-2 text-sm text-slate-500">
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Full-stack developers
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							DevOps engineers
						</li>
						<li class="flex items-center">
							<svg
								class="mr-2 h-4 w-4 flex-shrink-0 text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Technical leadership
						</li>
					</ul>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
					>
						Add Developers
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Engagement Models -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Engagement Models</h2>
				<p class="text-slate-400">Flexible arrangements to match your project needs</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500/10">
						<svg
							class="h-7 w-7 text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Project-Based</h3>
					<p class="mb-6 text-slate-400">
						Dedicated team for a specific project. Fixed scope, timeline, and deliverables. Perfect
						for well-defined initiatives.
					</p>
					<a href="/contact" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-500/10">
						<svg
							class="h-7 w-7 text-violet-400"
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
					<h3 class="mb-3 text-xl font-semibold">Dedicated Team</h3>
					<p class="mb-6 text-slate-400">
						Your extended team. We embed engineers who work directly with your team, reporting to
						your lead, while we handle infrastructure and management.
					</p>
					<a href="/contact" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>

				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-500/10">
						<svg
							class="h-7 w-7 text-purple-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Consulting</h3>
					<p class="mb-6 text-slate-400">
						Expert guidance without the long-term commitment. Strategic advice, architecture
						reviews, technology selection, and mentorship.
					</p>
					<a href="/contact" class="text-sm font-medium text-blue-400 hover:text-blue-300"
						>Learn More →</a
					>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="contact" class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Ready to Discuss Your Project?</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Our experienced engineers are ready to help bring your ideas to life. Let's schedule a call
				to explore how we can support your engineering needs.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="mailto:confessore@balasolu.com"
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
							<a href="/services" class="transition-colors hover:text-blue-400"
								>Custom Development</a
							>
						</li>
						<li>
							<a href="/services" class="transition-colors hover:text-blue-400">Cloud Migration</a>
						</li>
						<li>
							<a href="/services" class="transition-colors hover:text-blue-400"
								>System Integration</a
							>
						</li>
						<li>
							<a href="/services" class="transition-colors hover:text-blue-400">Team Augmentation</a
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
