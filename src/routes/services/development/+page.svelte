<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Custom Development — Balanced Solutions Software',
		description:
			'Bespoke software solutions built with product-quality engineering and scalability in mind. Custom development for greenfield and brownfield projects, microservices architecture, and legacy modernization.',
		canonicalUrl: getBaseUrl() + '/services/development',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Services', url: '/services' },
			{ name: 'Custom Development', url: '/services/development' }
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
				<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10">
					<svg class="h-8 w-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
			</div>
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">
				Custom
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
					>Development</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Bespoke software solutions built with product-quality engineering and scalability in mind.
				We design systems that grow with your business.
			</p>
		</div>
	</section>

	<!-- Capabilities Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">What We Build</h2>
				<p class="mx-auto max-w-2xl text-slate-400">
					From concept to deployment, we deliver end-to-end custom software solutions tailored to
					your specific requirements.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-indigo-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Greenfield Projects</h3>
					<p class="mb-4 text-slate-400">
						Starting from scratch, we build modern applications designed for scale from the ground
						up. Using the latest frameworks and best practices, we create systems that are
						maintainable, testable, and performant.
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
							Modern tech stacks (Svelte, React, Node.js)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Cloud-native architecture
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							API-first design
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-indigo-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Brownfield Projects</h3>
					<p class="mb-4 text-slate-400">
						Enhancing and extending existing systems with modern features and improvements. We
						work within your current codebase to add value without disrupting operations.
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
							Incremental modernization
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Feature development
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Performance optimization
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-indigo-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Microservices Architecture</h3>
					<p class="mb-4 text-slate-400">
						Designing and implementing microservices that are independently deployable, scalable,
						and resilient. We help teams break down monoliths into manageable, service-oriented
						architectures.
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
							Service boundary design
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Event-driven communication
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Container orchestration
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-indigo-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Legacy Modernization</h3>
					<p class="mb-4 text-slate-400">
						Bring your legacy systems into the modern era. We refactor, re-architect, and
						reimplement legacy applications using contemporary technologies and practices.
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
							Codebase assessment
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Incremental migration
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Technology stack upgrades
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Our Development Process</h2>
				<p class="text-slate-400">
					A structured approach that ensures quality, transparency, and timely delivery
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-4">
				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-lg font-bold text-indigo-400">
						1
					</div>
					<h3 class="mb-2 font-semibold">Discovery</h3>
					<p class="text-sm text-slate-400">
						Understand your requirements, constraints, and goals through collaborative workshops
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-lg font-bold text-indigo-400">
						2
					</div>
					<h3 class="mb-2 font-semibold">Design</h3>
					<p class="text-sm text-slate-400">
						Architect the solution with detailed technical specifications and prototypes
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-lg font-bold text-indigo-400">
						3
					</div>
					<h3 class="mb-2 font-semibold">Build</h3>
					<p class="text-sm text-slate-400">
						Iterative development with regular demos and continuous integration
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-lg font-bold text-indigo-400">
						4
					</div>
					<h3 class="mb-2 font-semibold">Deploy</h3>
					<p class="text-sm text-slate-400">
						Production deployment with monitoring, documentation, and knowledge transfer
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
					href="/services/integration"
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
						<svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">System Integration</h3>
					<p class="text-sm text-slate-400">
						Connect your systems with APIs and messaging platforms.
					</p>
				</a>

				<a
					href="/services/qa"
					class="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5"
				>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10">
						<svg class="h-6 w-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Quality Assurance</h3>
					<p class="text-sm text-slate-400">
						Testing and CI/CD pipelines for production-ready software.
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
			<h2 class="mb-6 text-3xl font-bold text-white">Start Your Custom Development Project</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Let's discuss your project requirements and explore how we can build a tailored solution for
				your business.
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