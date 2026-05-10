<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Quality Assurance — Balanced Solutions Software',
		description:
			'Rigorous testing procedures and CI/CD pipelines to ensure your code is production-ready. Automated testing, performance testing, and security testing.',
		canonicalUrl: getBaseUrl() + '/services/qa',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Services', url: '/services' },
			{ name: 'Quality Assurance', url: '/services/qa' }
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
				<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-rose-500/10">
					<svg class="h-8 w-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"
						/>
					</svg>
				</div>
			</div>
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">
				Quality
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
					>Assurance</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Rigorous testing procedures and CI/CD pipelines to ensure your code is production-ready
				before deployment.
			</p>
		</div>
	</section>

	<!-- Capabilities Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Testing Services</h2>
				<p class="mx-auto max-w-2xl text-slate-400">
					Comprehensive quality assurance that catches bugs before your users do. We implement
					test strategies at every level of the development lifecycle.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-rose-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Automated Testing Suites</h3>
					<p class="mb-4 text-slate-400">
						Build robust test automation that gives you confidence in every release. We design
						test frameworks that are maintainable, fast, and provide meaningful coverage.
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
							Unit & integration testing
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							E2E testing (Playwright, Cypress)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Test-driven development (TDD)
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-rose-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Performance Testing</h3>
					<p class="mb-4 text-slate-400">
						Ensure your application performs under any load. We identify bottlenecks, measure
						baselines, and validate that your system meets performance SLAs.
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
							Load & stress testing
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							LoadRunner, k6, JMeter
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Performance regression detection
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-rose-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Security Testing</h3>
					<p class="mb-4 text-slate-400">
						Identify and remediate security vulnerabilities before they become incidents. We
						implement both SAST and DAST testing to cover your entire attack surface.
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
							SAST (Static Analysis)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							DAST (Dynamic Analysis)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Secrets scanning & dependency audits
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-rose-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">CI/CD Quality Gates</h3>
					<p class="mb-4 text-slate-400">
						Automate quality checks into your deployment pipeline. We implement gates that
						prevent regressions and ensure every release meets your standards.
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
							GitHub Actions, GitLab CI
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Code coverage thresholds
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Automated rollback strategies
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Testing Pyramid Section -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Testing Strategy</h2>
				<p class="text-slate-400">
					A balanced testing approach ensures quality at every level
				</p>
			</div>

			<div class="max-w-2xl mx-auto">
				<div class="space-y-3">
					<div
						class="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center transition-colors hover:border-rose-500/50"
					>
						<span class="text-sm font-semibold text-rose-400">E2E Tests</span>
						<span class="ml-2 text-sm text-slate-400">~10% of tests</span>
						<p class="text-xs text-slate-500 mt-1">
							User journey validation
						</p>
					</div>
					<div
						class="rounded-xl border border-slate-700 bg-slate-800 p-5 text-center transition-colors hover:border-rose-500/50 mx-auto max-w-[85%]"
					>
						<span class="text-sm font-semibold text-rose-400">Integration Tests</span>
						<span class="ml-2 text-sm text-slate-400">~20% of tests</span>
						<p class="text-xs text-slate-500 mt-1">
							Component & API interaction
						</p>
					</div>
					<div
						class="rounded-xl border border-slate-700 bg-slate-800 p-7 text-center transition-colors hover:border-rose-500/50 mx-auto max-w-[100%]"
					>
						<span class="text-sm font-semibold text-rose-400">Unit Tests</span>
						<span class="ml-2 text-sm text-slate-400">~70% of tests</span>
						<p class="text-xs text-slate-500 mt-1">
							Individual function & module testing
						</p>
					</div>
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
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Ship with Confidence</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Let's implement a comprehensive testing strategy that catches issues early and gives your
				team confidence in every release.
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