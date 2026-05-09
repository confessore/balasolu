<script lang="ts">
	import { getSeoHead, getOrganizationJsonLd, getBaseUrl } from '$lib/seo';

	const seoConfig = {
		title: 'Privacy Policy — Balanced Solutions Software',
		description:
			'Our privacy policy explains how we collect, use and protect your personal information when you visit our website.',
		canonicalUrl: '/privacy' as string | undefined,
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

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": ["SoftwareCompany", "LocalBusiness"],
			"name": "Balanced Solutions Software",
			"image": "/static/logo.png",
			"url": "${getBaseUrl()}",
			"telephone": "+1-352-234-3458",
			"email": "confessore@balasolu.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "123 Technology Drive, Suite 100",
				"addressLocality": "Orlando",
				"addressRegion": "FL",
				"postalCode": "32801",
				"addressCountry": "US"
			},
			"priceRange": "$$",
			"description": "${seoConfig.description}",
			"sameAs": ["https://linkedin.com/company/balasolu", "https://twitter.com/balasolu"]
		}
	</script>
</svelte:head>

<div
	class="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-blue-500 selection:text-white"
>
	<!-- Navigation -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur-sm"
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<a href="/" class="flex items-center space-x-3">
				<img src="/favicon.svg" alt="Balanced Solutions" class="h-6 w-6" />
				<span
					class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-bold text-transparent"
					>Balanced Solutions</span
				>
			</a>
			<div class="flex hidden items-center space-x-4 md:flex">
				<a href="/" class="text-sm font-medium text-slate-300 transition-colors hover:text-white"
					>Home</a
				>
				<a
					href="/about"
					class="text-sm font-medium text-slate-300 transition-colors hover:text-white">About</a
				>
				<a
					href="/services"
					class="text-sm font-medium text-slate-300 transition-colors hover:text-white">Services</a
				>
				<a
					href="/contact"
					class="text-sm font-medium text-slate-300 transition-colors hover:text-white">Contact</a
				>
			</div>
		</div>
	</nav>

	<!-- Page Header -->
	<section class="bg-gradient-to-b from-slate-900 to-slate-800 px-6 pt-32 pb-16">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl">{seoConfig.title}</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-400">
				Last updated: {new Date().toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</p>
		</div>
	</section>

	<!-- Privacy Content -->
	<section class="px-6 py-16">
		<div class="mx-auto prose max-w-4xl text-lg leading-relaxed prose-slate">
			<h2 id="introduction" class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold">
				Introduction
			</h2>
			<p>
				Welcome to Balanced Solutions Software. Your privacy is important to us, and this Privacy
				Policy explains how we collect, use, disclose, and safeguard your information when you visit
				our website.
			</p>

			<h2
				id="information-we-collect"
				class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold"
			>
				Information We Collect
			</h2>

			<h3 class="mt-6 mb-3 text-xl font-semibold">Personal Information You Provide to Us:</h3>
			<p>
				We may collect personal information that you voluntarily provide to us when you register on
				our website, use certain features or communicate with us. This may include your name, email
				address and other contact details.
			</p>

			<h3 class="mt-6 mb-3 text-xl font-semibold">Information Collected Automatically:</h3>
			<p>
				We automatically collect information about how you interact with our website when you visit
				it. This includes IP addresses, browser type, pages viewed, time spent on each page and
				other diagnostic data.
			</p>

			<h2
				id="how-we-use-your-information"
				class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold"
			>
				How We Use Your Information
			</h2>
			<p>We use the information we collect to:</p>
			<ul class="ml-4 list-inside list-disc space-y-2">
				<li>Provide, maintain and improve our website and services</li>
				<li>Respond to your inquiries and provide customer support</li>
				<li>Send you updates about our products and services (with your consent)</li>
				<li>Analyze usage patterns and trends</li>
				<li>Detect and prevent fraud or abuse</li>
			</ul>

			<h2
				id="information-sharing"
				class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold"
			>
				Information Sharing
			</h2>
			<p>
				We do not sell, trade or rent your personal information to third parties. We may share your
				information with service providers who assist us in operating our website and conducting our
				business.
			</p>

			<h2 id="data-security" class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold">
				Data Security
			</h2>
			<p>
				We implement appropriate technical and organizational security measures to protect against
				unauthorized access, alteration or destruction of your personal information. However, no
				internet transmission is ever completely secure.
			</p>

			<h2 id="your-rights" class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold">
				Your Rights
			</h2>
			<p>You have the right to:</p>
			<ul class="ml-4 list-inside list-disc space-y-2">
				<li>Access personal information we hold about you</li>
				<li>Request correction of inaccurate data</li>
				<li>
					Request deletion of your personal data under certain circumstances (such as the GDPR)
				</li>
				<li>
					Opt-out of marketing communications (subject to legal requirements and legitimate
					interests)
				</li>
			</ul>

			<h2 id="cookies" class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold">
				Cookies
			</h2>
			<p>
				We use cookies and similar tracking technologies to track activity on our service, hold
				certain information. Cookies are files with a small amount of data which may include an
				anonymous unique identifier.
			</p>

			<h3 class="mt-6 mb-3 text-xl font-semibold">Types of Cookies We Use:</h3>
			<ul class="ml-4 list-inside list-disc space-y-2">
				<li>
					<strong>Necessary cookies</strong>: These are essential for the website to function
					properly and cannot be disabled.
				</li>
				<li>
					<strong>Functional cookies</strong>: Enable certain functionality like remembering your
					preferences or login status.
				</li>
				<li>
					<strong>Analytical/Performance cookies</strong>: Help us understand how visitors interact
					with our service by collecting information about page views, click-through rates and other
					metrics.
				</li>
			</ul>

			<h2 id="contact-us" class="mt-8 mb-4 border-b border-slate-700 pb-2 text-3xl font-bold">
				Contact Us
			</h2>
			<p>
				If you have any questions about this Privacy Policy or our data practices, please contact us
				at:
			</p>

			<div
				class="mt-4 rounded-xl border border-slate-700 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-8"
			>
				<h3 class="mb-2 flex items-center space-x-2 text-lg font-semibold text-white">Email:</h3>
				<a
					href="mailto:confessore@balasolu.com"
					class="block break-all text-blue-400 transition-colors hover:text-blue-300"
					>confessore@balasolu.com</a
				>

				<div class="mt-6 border-t border-slate-700 pt-6">
					<p class="mb-2 flex items-center space-x-2 font-semibold text-white">
						<span>+1 352 234 3458</span>
					</p>
				</div>

				<div class="mt-6 border-t border-slate-700 pt-6">
					<h3 class="mb-2 flex items-center space-x-2 font-semibold text-white">
						<address class="leading-relaxed text-slate-400 not-italic">
							Balanced Solutions Software<br />123 Technology Drive, Suite 100<br />Orlando, FL
							32801<br />United States of America
						</address>
					</h3>
				</div>

				<p class="mt-4 text-sm text-slate-500">We aim to respond within 24 business hours.</p>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="mt-auto border-t border-slate-800 bg-slate-950 px-6 py-12">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 grid gap-8 md:grid-cols-4">
				<div class="md:col-span-2">
					<a href="/" class="mb-4 flex items-center space-x-3">
						<img src="/favicon.svg" alt="Balanced Solutions" class="h-6 w-6" />
						<span
							class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-bold text-transparent"
						>
							Balanced Solutions
						</span>
					</a>
					<p class="max-w-md leading-relaxed text-slate-400">
						We build software products and partner with individuals and businesses to deliver
						development and consulting services.
					</p>
				</div>

				<!-- Services -->
				<div>
					<h3 class="mb-2 text-sm font-semibold tracking-wide text-white uppercase">Services</h3>
					<ul class="space-y-2 text-slate-400">
						<li>
							<a
								href="/services"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>Custom Development</a
							>
						</li>
						<li>
							<a
								href="/services"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>Cloud Migration</a
							>
						</li>
						<li>
							<a
								href="/services"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>System Integration</a
							>
						</li>
						<li>
							<a
								href="/services"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>Team Augmentation</a
							>
						</li>
					</ul>
				</div>

				<!-- Company -->
				<div>
					<h3 class="mb-2 text-sm font-semibold tracking-wide text-white uppercase">Company</h3>
					<ul class="space-y-2 text-slate-400">
						<li>
							<a
								href="/about"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>About Us</a
							>
						</li>
						<li>
							<a
								href="/services"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>Services</a
							>
						</li>
						<li>
							<a
								href="/contact"
								class="block break-all transition-colors hover:text-blue-400 hover:underline"
								>Contact</a
							>
						</li>
					</ul>

					<!-- Social Links -->
					<div class="mt-6 border-t border-slate-800 pt-6">
						<h3 class="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
							Connect With Us
						</h3>
						<div class="flex flex-wrap gap-2 space-x-2">
							<a
								href="#"
								class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-blue-600"
								aria-label="LinkedIn">Li</a
							>
							<a
								href="#"
								class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-blue-400"
								aria-label="Twitter/X">Tw</a
							>
						</div>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row"
			>
				<p>&copy; {new Date().getFullYear()} Balanced Solutions Software. All rights reserved.</p>

				<nav class="mt-4 flex space-x-6 md:mt-0" aria-label="Footer navigation">
					<a
						href="/privacy"
						class="text-slate-500 transition-colors hover:text-blue-400 hover:underline"
						>Privacy Policy</a
					>
					<a href="/" class="text-slate-500 transition-colors hover:text-blue-400 hover:underline"
						>Terms of Service</a
					>
				</nav>
			</div>

			<!-- SEO structured data -->
			{getOrganizationJsonLd()}
		</div>
	</footer>
</div>
