<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Privacy Policy — Balanced Solutions Software',
		description:
			'Balanced Solutions Software privacy policy. We collect minimal data necessary to operate our services and communicate with clients effectively.',
		canonicalUrl: getBaseUrl() + '/privacy',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Privacy Policy', url: '/privacy' }
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
				Privacy
				<span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
					Policy</span
				>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">Last updated: April 25, 2026</p>
		</div>
	</section>

	<!-- Content -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl space-y-12">
			<!-- Introduction -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Introduction</h2>
				<p class="mb-4 text-slate-400">
					At Balanced Solutions Software ("we," "our," or "us"), we are committed to transparency
					about how we collect, use, and protect your information. This Privacy Policy explains our
					practices regarding data collection for individuals visiting our website and using our
					services.
				</p>
				<p class="text-slate-400">
					By accessing or using our website and services, you agree to the terms outlined in this
					Privacy Policy. If you do not agree with these practices, please do not use our services.
				</p>
			</div>

			<!-- Information We Collect -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Information We Collect</h2>

				<h3 class="mb-4 text-lg font-semibold text-blue-400">Information You Provide Directly</h3>
				<ul class="mb-8 space-y-3 text-slate-400">
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
						<span
							><strong>Contact Information:</strong> When you reach out through our contact form, we collect
							your name, email address, and any message content you choose to provide.</span
						>
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
						<span
							><strong>Project Details:</strong> When discussing potential projects, we may collect information
							about your requirements, timelines, and business needs.</span
						>
					</li>
				</ul>

				<h3 class="mb-4 text-lg font-semibold text-blue-400">
					Information Collected Automatically
				</h3>
				<p class="mb-6 text-slate-400">
					We collect minimal data from website visitors. The following types of information may be
					collected:
				</p>
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
						<span
							><strong>Log Data:</strong> Standard web server logs may collect your IP address, browser
							type, pages visited, and the page you visited before ours.</span
						>
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
						<span
							><strong>Device Information:</strong> We may collect information about the device you use,
							including hardware model, operating system version, and unique device identifiers.</span
						>
					</li>
				</ul>
			</div>

			<!-- How We Use Your Information -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">How We Use Your Information</h2>
				<p class="mb-6 text-slate-400">
					We use the information we collect for the following purposes:
				</p>
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
						<span>To respond to your inquiries and provide customer support</span>
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
						<span>To provide software development and consulting services</span>
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
						<span>To communicate about project updates, deliverables, and important notices</span>
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
						<span>To improve our website, services, and user experience</span>
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
						<span>To comply with legal obligations and protect our rights</span>
					</li>
				</ul>
			</div>

			<!-- Data Sharing -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Data Sharing</h2>
				<p class="mb-6 text-slate-400">
					We do not sell your personal information. We may share your information in the following
					circumstances:
				</p>
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
						<span
							><strong>Service Providers:</strong> We may share information with trusted third-party service
							providers who assist us in operating our website and delivering services.</span
						>
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
						<span
							><strong>Legal Requirements:</strong> We may disclose information if required to do so by
							law or in response to valid requests from public authorities.</span
						>
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
						<span
							><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale
							of assets, your information may be shared as a business asset.</span
						>
					</li>
				</ul>
			</div>

			<!-- Data Security -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Data Security</h2>
				<p class="mb-4 text-slate-400">
					We implement appropriate technical and organizational security measures to protect your
					personal information against unauthorized access, alteration, disclosure, or destruction.
				</p>
				<p class="text-slate-400">
					While we strive to use commercially acceptable means to protect your information, no
					method of transmission over the Internet or electronic storage is 100% secure. We cannot
					guarantee absolute security but are committed to implementing industry-standard
					protections.
				</p>
			</div>

			<!-- Your Rights -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Your Rights</h2>
				<p class="mb-6 text-slate-400">
					Depending on your location, you may have the following rights regarding your personal
					data:
				</p>
				<ul class="mb-8 space-y-3 text-slate-400">
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
						<span
							><strong>Access:</strong> Request a copy of the personal data we hold about you.</span
						>
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
						<span
							><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</span
						>
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
						<span
							><strong>Delete:</strong> Request deletion of your personal data where applicable.</span
						>
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
						<span
							><strong>Portability:</strong> Request transfer of your data in a machine-readable format.</span
						>
					</li>
				</ul>
				<p class="text-slate-400">
					To exercise these rights, please contact us at <a
						href="mailto:hello@balancedsolutions.com"
						class="text-blue-400 underline transition-colors hover:text-cyan-300"
						>hello@balancedsolutions.com</a
					>
				</p>
			</div>

			<!-- Cookies -->
			<div class="rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12">
				<h2 class="mb-6 text-2xl font-bold">Cookies</h2>
				<p class="mb-4 text-slate-400">
					We use minimal cookies on our website. Cookies are small text files stored on your device
					when you visit our site. They help us understand how visitors interact with our website
					and improve the user experience.
				</p>
				<p class="text-slate-400">
					You can control cookie settings through your browser preferences. Most browsers allow you
					to:
				</p>
				<ul class="mt-3 ml-4 space-y-2 text-slate-400">
					<li>&bull; Block or delete cookies</li>
					<li>&bull; Set your browser to notify you when a cookie is set</li>
					<li>&bull; Clear all cookies stored by your browser</li>
				</ul>
			</div>

			<!-- Contact CTA -->
		</div>
	</section>

	<section id="contact" class="px-6 py-12">
		<div
			class="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12 text-center"
		>
			<h2 class="mb-6 text-3xl font-bold text-white">Questions About Our Privacy Policy?</h2>
			<p class="mx-auto mb-8 max-w-xl text-blue-100">
				If you have any questions about our privacy practices or would like to exercise your rights,
				please don't hesitate to reach out.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
				>
					Get in Touch
				</a>
				<a
					href="mailto:hello@balancedsolutions.com"
					class="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
				>
					Email Us Directly
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
