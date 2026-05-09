<script lang="ts">
	import { getSeoHead, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Contact — Balanced Solutions Software',
		description:
			'Get in touch with Balanced Solutions Software. Our experienced engineers are ready to discuss your software development needs and help bring your project to life.',
		canonicalUrl: getBaseUrl() + '/contact',
		ogType: 'website' as const,
		ogImage: `${getBaseUrl()}/static/og-image.png`,
		twitterCard: 'summary_large_image' as const,
		breadcrumbs: [
			{ name: 'Home', url: '/' },
			{ name: 'Contact', url: '/contact' }
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
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Ready to bring product-quality engineering to your project? Let's discuss your needs.
			</p>
		</div>
	</section>

	<!-- Contact Form -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<div class="grid gap-12 md:grid-cols-2">
				<div class="md:col-span-2">
					<div class="mb-6 rounded-2xl border border-slate-700 bg-slate-800 p-8">
						<h2 class="mb-6 text-2xl font-bold">Contact Information</h2>
						<div class="space-y-6">
							<div>
								<h3 class="mb-2 font-semibold">Email</h3>
								<a
									href="mailto:confessore@balasolu.com"
									class="text-blue-400 transition-colors hover:text-blue-300"
								>
									confessore@balasolu.com
								</a>
							</div>
							<div>
								<h3 class="mb-2 font-semibold">Phone</h3>
								<a
									href="tel:+13522343458"
									class="text-blue-400 transition-colors hover:text-blue-300"
								>
									352 234 3458
								</a>
							</div>
						</div>
					</div>

					<div
						class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-8"
					>
						<h3 class="mb-4 text-xl font-semibold">Quick Response Promise</h3>
						<p class="mb-4 text-slate-400">
							We aim to respond to all inquiries within 24 business hours. For urgent project needs,
							please call us directly.
						</p>
						<div class="flex items-center text-sm text-slate-400">
							<svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Typical response: 2-4 hours</span>
						</div>
					</div>
				</div>
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
