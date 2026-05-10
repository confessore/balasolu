<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'System Integration — Balanced Solutions Software',
		description:
			'Connect disparate systems seamlessly. We build APIs, event-driven architectures, and messaging solutions that make systems work together.',
		canonicalUrl: getBaseUrl() + '/services/integration',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Services', url: '/services' },
			{ name: 'System Integration', url: '/services/integration' }
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
			<div class="mb-6 flex justify-center">
				<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10">
					<svg class="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
				</div>
			</div>
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">
				System
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
					>Integration</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Connect disparate systems seamlessly. We build APIs, event-driven architectures, and
				messaging solutions that make systems work together.
			</p>
		</div>
	</section>

	<!-- Capabilities Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Integration Services</h2>
				<p class="mx-auto max-w-2xl text-slate-400">
					Bridge the gap between your applications and data sources. We create reliable,
					scakable integration layers that keep your technology ecosystem connected.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-purple-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">REST & GraphQL APIs</h3>
					<p class="mb-4 text-slate-400">
						Design and build robust APIs that serve as the backbone of your integration
						architecture. We follow industry best practices for API design, documentation, and
						versioning.
					</p>
					<ul class="space-y-2 text-sm text-slate-400">
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							API design & architecture
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							OpenAPI/Swagger documentation
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Authentication & rate limiting
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-purple-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Event Streaming</h3>
					<p class="mb-4 text-slate-400">
						Build real-time event-driven architectures that enable loose coupling between
						services. We implement streaming platforms that handle high-volume data flows
						reliably.
					</p>
					<ul class="space-y-2 text-sm text-slate-400">
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Apache Kafka
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							RabbitMQ
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							AWS SQS / SNS / EventBridge
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-purple-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Enterprise ERP/CRM Integration</h3>
					<p class="mb-4 text-slate-400">
						Connect your business applications to create a unified data flow. We integrate
						enterprise systems to eliminate data silos and automate business processes.
					</p>
					<ul class="space-y-2 text-sm text-slate-400">
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Salesforce, SAP, Oracle
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							ERP-to-ERP data sync
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Custom middleware development
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-purple-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Data Synchronization</h3>
					<p class="mb-4 text-slate-400">
						Keep your data consistent across systems with real-time synchronization. We build
						reliable data pipelines that ensure information flows accurately between
						applications.
					</p>
					<ul class="space-y-2 text-sm text-slate-400">
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Change data capture
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							ETL/ELT pipelines
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Data transformation & mapping
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Integration Patterns Section -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Integration Patterns</h2>
				<p class="text-slate-400">
					We select the right pattern for your use case
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-colors hover:border-purple-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
						<svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 font-semibold">Point-to-Point</h3>
					<p class="text-sm text-slate-400">
						Direct connections between two systems. Simple and fast for basic integrations
						with low complexity.
					</p>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-colors hover:border-purple-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
						<svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
					</div>
					<h3 class="mb-2 font-semibold">Hub & Spoke</h3>
					<p class="text-sm text-slate-400">
						Centralized integration hub connecting multiple systems. Ideal for enterprise
						environments with many touchpoints.
					</p>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-colors hover:border-purple-500/50"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
						<svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 font-semibold">Event-Driven</h3>
					<p class="text-sm text-slate-400">
						Real-time event streaming for loose coupling and high scalability. Perfect for
						modern microservices architectures.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Related Services -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">Related Services</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<a
					href="/services/development"
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
						<svg class="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
						Bespoke software solutions built for your specific needs.
					</p>
				</a>

				<a
					href="/services/cloud-migration"
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
						<svg class="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Cloud Migration</h3>
					<p class="text-sm text-slate-400">
						Migrate to AWS with security and compliance in mind.
					</p>
				</a>

				<a
					href="/services/data-analytics"
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10">
						<svg class="h-6 w-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Data Analytics</h3>
					<p class="text-sm text-slate-400">
						Build data pipelines and analytics platforms for your business.
					</p>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Connect Your Systems</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Let's eliminate data silos and create seamless workflows across your technology stack.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
				>
					Get in Touch
				</a>
				<a
					href="/services"
					class="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
				>
					View All Services
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
						<li><a href="/" class="transition-colors hover:text-blue-400">Home</a></li>
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