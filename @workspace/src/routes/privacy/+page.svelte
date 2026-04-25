<script lang="ts">
  import { getSeoHead, getOrganizationJsonLd, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'Privacy Policy — Balanced Solutions Software',
    description: 'Our privacy policy explains how we collect, use and protect your personal information when you visit our website.',
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
  
  <script type="application/ld+json">{"@context":"https://schema.org","@type":["SoftwareCompany","LocalBusiness"],"name":"Balanced Solutions Software","image":"/static/logo.png","url": "${getBaseUrl()}","telephone":"+1-352-234-3458","email": "confessore@balasolu.com", "address":{"@type":"PostalAddress","streetAddress":"123 Technology Drive, Suite 100","addressLocality":"Orlando","addressRegion":"FL","postalCode":"32801","addressCountry":"US"},"priceRange": "$$","description": "${seoConfig.description}","sameAs":["https://linkedin.com/company/balasolu","https://twitter.com/balasolu"]}</script>
</svelte:head>

<div class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center space-x-3">
        <img src="/favicon.svg" alt="Balanced Solutions" class="w-6 h-6" />
        <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Balanced Solutions</span>
      </a>
      <div class="flex items-center space-x-4 hidden md:flex">
        <a href="/" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</a>
        <a href="/about" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
        <a href="/services" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</a>
        <a href="/contact" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{seoConfig.title}</h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
  </section>

  <!-- Privacy Content -->
  <section class="py-16 px-6">
    <div class="max-w-4xl mx-auto prose prose-slate text-lg leading-relaxed">
      <h2 id="introduction" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Introduction</h2>
      <p>Welcome to Balanced Solutions Software. Your privacy is important to us, and this Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

      <h2 id="information-we-collect" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Information We Collect</h2>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Personal Information You Provide to Us:</h3>
      <p>We may collect personal information that you voluntarily provide to us when you register on our website, use certain features or communicate with us. This may include your name, email address and other contact details.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Information Collected Automatically:</h3>
      <p>We automatically collect information about how you interact with our website when you visit it. This includes IP addresses, browser type, pages viewed, time spent on each page and other diagnostic data.</p>

      <h2 id="how-we-use-your-information" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li>Provide, maintain and improve our website and services</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send you updates about our products and services (with your consent)</li>
        <li>Analyze usage patterns and trends</li>
        <li>Detect and prevent fraud or abuse</li>
      </ul>

      <h2 id="information-sharing" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Information Sharing</h2>
      <p>We do not sell, trade or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business.</p>

      <h2 id="data-security" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Data Security</h2>
      <p>We implement appropriate technical and organizational security measures to protect against unauthorized access, alteration or destruction of your personal information. However, no internet transmission is ever completely secure.</p>

      <h2 id="your-rights" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Your Rights</h2>
      <p>You have the right to:</p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li>Access personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your personal data under certain circumstances (such as the GDPR)</li>
        <li>Opt-out of marketing communications (subject to legal requirements and legitimate interests)</li>
      </ul>

      <h2 id="cookies" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Cookies</h2>
      <p>We use cookies and similar tracking technologies to track activity on our service, hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">Types of Cookies We Use:</h3>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li><strong>Necessary cookies</strong>: These are essential for the website to function properly and cannot be disabled.</li>
        <li><strong>Functional cookies</strong>: Enable certain functionality like remembering your preferences or login status.</li>
        <li><strong>Analytical/Performance cookies</strong>: Help us understand how visitors interact with our service by collecting information about page views, click-through rates and other metrics.</li>
      </ul>

      <h2 id="contact-us" class="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-slate-700">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>

      <div class="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-xl p-8 border border-slate-700 mt-4">
        <h3 class="text-lg font-semibold mb-2 text-white flex items-center space-x-2">Email:</h3>
        <a href="mailto:confessore@balasolu.com" class="text-blue-400 hover:text-blue-300 transition-colors block break-all">confessore@balasolu.com</a>

        <div class="mt-6 border-t border-slate-700 pt-6">
          <p class="font-semibold mb-2 text-white flex items-center space-x-2"><span>+1 352 234 3458</span></p>
        </div>

        <div class="mt-6 border-t border-slate-700 pt-6">
          <h3 class="font-semibold mb-2 text-white flex items-center space-x-2"><address class="text-slate-400 not-italic leading-relaxed">Balanced Solutions Software<br/>123 Technology Drive, Suite 100<br/>Orlando, FL 32801<br/>United States of America</address></h3>
        </div>

        <p class="mt-4 text-sm text-slate-500">We aim to respond within 24 business hours.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 px-6 border-t border-slate-800 bg-slate-950 mt-auto">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2">
          <a href="/" class="flex items-center space-x-3 mb-4">
            <img src="/favicon.svg" alt="Balanced Solutions" class="w-6 h-6" />
            <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Balanced Solutions
            </span>
          </a>
          <p class="text-slate-400 max-w-md leading-relaxed">
            We build software products and partner with individuals and businesses to deliver development and consulting services.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Services</h3>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/services" class="hover:text-blue-400 transition-colors hover:underline block break-all">Custom Development</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors hover:underline block break-all">Cloud Migration</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors hover:underline block break-all">System Integration</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors hover:underline block break-all">Team Augmentation</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Company</h3>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/about" class="hover:text-blue-400 transition-colors hover:underline block break-all">About Us</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors hover:underline block break-all">Services</a></li>
            <li><a href="/contact" class="hover:text-blue-400 transition-colors hover:underline block break-all">Contact</a></li>
          </ul>

          <!-- Social Links -->
          <div class="mt-6 pt-6 border-t border-slate-800">
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Connect With Us</h3>
            <div class="flex space-x-2 flex-wrap gap-2">
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="LinkedIn">Li</a>
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors text-white" aria-label="Twitter/X">Tw</a>
            </div>
          </div>
        </div>
      </div>

       <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
         <p>&copy; {new Date().getFullYear()} Balanced Solutions Software. All rights reserved.</p>
         
         <nav class="flex space-x-6 mt-4 md:mt-0" aria-label="Footer navigation">
           <a href="/privacy" class="hover:text-blue-400 transition-colors hover:underline text-slate-500">Privacy Policy</a>
           <a href="/" class="hover:text-blue-400 transition-colors hover:underline text-slate-500">Terms of Service</a>
         </nav>
       </div>

        <!-- SEO structured data -->
        {getOrganizationJsonLd()}
    </div>
  </footer>
</div>