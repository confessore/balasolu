<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'About — Balanced Solutions Software',
		description:
			'Learn about Balanced Solutions Software. We build our own software products and partner with individuals and businesses to deliver development and consulting services with product-quality engineering.',
		canonicalUrl: getBaseUrl() + '/about',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' }
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
				About
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
					Balanced Solutions</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				We build our own software products and partner with individuals and businesses to deliver
				development and consulting services.
			</p>
		</div>
	</section>

	<!-- Mission Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Our Mission</h2>
				<p class="mb-4 text-slate-400">
					At Balanced Solutions, we do two things: we build our own software products, and we
					partner with individuals and businesses to deliver development and consulting services.
					This dual focus gives us a unique perspective — we bring the discipline and quality
					standards of product development to every client engagement.
				</p>
				<p class="mb-4 text-slate-400">
					We believe that the best software is built by engineers who care deeply about the craft.
					Our team brings years of experience building and maintaining complex systems, and we apply
					those same standards to every project we take on.
				</p>
				<p class="text-slate-400">
					Our approach balances product-quality engineering with flexible, client-focused delivery.
					Whether you're an individual with an idea or a business that needs dedicated development
					resources, we're here to help.
				</p>
			</div>
		</div>
	</section>

	<!-- Who We Are -->
	<section class="bg-slate-800/30 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">What Makes Us Different</h2>

			<div class="mb-16 grid gap-8 md:grid-cols-2">
				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-blue-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Product Builders</h3>
					<p class="text-slate-400">
						We build our own software products. This product development mindset means we think
						about maintainability, scalability, and user experience from day one. We bring that same
						product-quality approach to every client project we take on.
					</p>
				</div>

				<div
					class="rounded-xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-blue-500/50"
				>
					<h3 class="mb-4 text-xl font-semibold">Flexible Partners</h3>
					<p class="text-slate-400">
						We don't just build software — we partner with our clients. Whether you need a full
						build, ongoing development support, or expert advice, we adapt to your needs and work as
						an extension of your team.
					</p>
				</div>
			</div>

			<div
				class="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-8"
			>
				<h3 class="mb-4 text-xl font-semibold">The Balanced Advantage</h3>
				<p class="mb-6 text-slate-400">
					Why choose Balanced Solutions? We combine the discipline of product development with the
					flexibility of consulting. Our engineers bring deep technical expertise while maintaining
					a client-first mindset.
				</p>
				<div class="grid gap-6 md:grid-cols-2">
					<ul class="space-y-3 text-slate-400">
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Product-quality engineering standards
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Flexible engagement models
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Transparent communication
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Deep expertise in modern technologies
						</li>
					</ul>
					<ul class="space-y-3 text-slate-400">
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Proven track record of delivery
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Battle-tested development methodologies
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Seamless integration with your team
						</li>
						<li class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							Dedicated support and communication
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">Our Team</h2>

			<div class="mb-16 grid gap-8 md:grid-cols-2">
				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<h3 class="mb-4 text-xl font-semibold">Experienced Engineers</h3>
					<p class="mb-4 text-slate-400">
						Our team includes experienced engineers who have built and maintained complex software
						systems. They understand the nuances of enterprise software development: the need for
						maintainability, the importance of documentation, and the value of peer review.
					</p>
					<p class="text-slate-400">
						Each team member brings unique specialties — from frontend development and backend
						services to DevOps and QA — while sharing a commitment to the highest standards.
					</p>
				</div>

				<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
					<h3 class="mb-4 text-xl font-semibold">Leadership Experience</h3>
					<p class="mb-4 text-slate-400">
						Beyond individual expertise, we have leaders who have managed large-scale engineering
						teams and delivered complex programs. This experience translates into structured
						processes that enable rapid onboarding and consistent delivery.
					</p>
					<p class="text-slate-400">
						Our leadership helps navigate complex project dynamics, align technical decisions with
						business objectives, and ensure that every deliverable meets the highest expectations.
					</p>
				</div>
			</div>

			<div class="rounded-xl border border-slate-700 bg-slate-800 p-8">
				<h3 class="mb-6 text-xl font-semibold">Core Values</h3>
				<div class="grid gap-6 md:grid-cols-3">
					<div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
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
									d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"
								/>
							</svg>
						</div>
						<h4 class="mb-2 font-semibold">Quality First</h4>
						<p class="text-sm text-slate-400">
							We treat quality as non-negotiable. Every line of code meets the highest standards.
						</p>
					</div>

					<div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
						<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
							<svg
								class="h-6 w-6 text-cyan-400"
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
						<h4 class="mb-2 font-semibold">Client Partnership</h4>
						<p class="text-sm text-slate-400">
							We're invested in your success and operate as an extension of your team.
						</p>
					</div>

					<div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10"
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
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6"
								/>
							</svg>
						</div>
						<h4 class="mb-2 font-semibold">Continuous Learning</h4>
						<p class="text-sm text-slate-400">
							We stay ahead of technology trends and share knowledge with our clients.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="contact" class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Ready to Work With Us?</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				Our experienced engineers are ready to help bring your ideas to life. Whether you need a
				full build, ongoing partnership, or expert advice.
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
					View Services
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
