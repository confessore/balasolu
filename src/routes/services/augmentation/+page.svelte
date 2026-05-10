<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Team Augmentation — Balanced Solutions Software',
		description:
			'Scale your engineering team with our engineers on a flexible, contract basis. Full-stack developers, DevOps engineers, and technical leadership.',
		canonicalUrl: getBaseUrl() + '/services/augmentation',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Services', url: '/services' },
			{ name: 'Team Augmentation', url: '/services/augmentation' }
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
				<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500/10">
					<svg class="h-8 w-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
			</div>
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">
				Team
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
					>Augmentation</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Scale your engineering team with our engineers on a flexible, contract basis. We
				integrate seamlessly and deliver immediately.
			</p>
		</div>
	</section>

	<!-- Capabilities Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">Augmentation Services</h2>
				<p class="mx-auto max-w-2xl text-slate-400">
					Get the talent you need, when you need it. Our engineers hit the ground running and
					integrate seamlessly with your existing team and processes.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-orange-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Full-Stack Developers</h3>
					<p class="mb-4 text-slate-400">
						Versatile developers who can work across the entire stack. From frontend interfaces
						to backend services, we provide developers who can own features end-to-end.
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
							Frontend (Svelte, React, Vue)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Backend (Node.js, Python, Go)
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Database & API design
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-orange-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">DevOps Engineers</h3>
					<p class="mb-4 text-slate-400">
						Infrastructure and automation experts who keep your deployment pipeline running
						smoothly. We help teams achieve faster, more reliable releases.
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
							CI/CD pipeline design
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Kubernetes & Docker
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Infrastructure as Code
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-orange-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Technical Leadership</h3>
					<p class="mb-4 text-slate-400">
						Experienced engineering leaders who can guide your team's technical direction. We
						provide architecture oversight, code review processes, and team mentorship.
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
							Architecture & design decisions
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Engineering process improvement
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Mentorship & knowledge transfer
						</li>
					</ul>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-orange-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Specialized Roles</h3>
					<p class="mb-4 text-slate-400">
						Need a specific skill set? We provide engineers with specialized expertise in
						areas like QA automation, data engineering, security, and more.
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
							QA automation engineers
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Data engineers
						</li>
						<li class="flex items-center">
							<svg class="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Security engineers
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Engagement Models Section -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-3xl font-bold">How It Works</h2>
				<p class="text-slate-400">
					A simple process to get your team the talent they need
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-4">
				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-lg font-bold text-orange-400">
						1
					</div>
					<h3 class="mb-2 font-semibold">Share Requirements</h3>
					<p class="text-sm text-slate-400">
						Tell us about the skills, experience level, and duration you need
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-lg font-bold text-orange-400">
						2
					</div>
					<h3 class="mb-2 font-semibold">Match & Interview</h3>
					<p class="text-sm text-slate-400">
						We present pre-vetted candidates who match your requirements
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-lg font-bold text-orange-400">
						3
					</div>
					<h3 class="mb-2 font-semibold">Onboard Quickly</h3>
					<p class="text-sm text-slate-400">
						Selected engineers onboard rapidly and start contributing immediately
					</p>
				</div>

				<div class="text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-lg font-bold text-orange-400">
						4
					</div>
					<h3 class="mb-2 font-semibold">Scale Flexibly</h3>
					<p class="text-sm text-slate-400">
						Expand or reduce your augmented team as project needs change
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
			<h2 class="mb-6 text-3xl font-bold text-white">Scale Your Team Today</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Get access to top engineering talent that integrates seamlessly with your team. Let's find
				the right people for your project.
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