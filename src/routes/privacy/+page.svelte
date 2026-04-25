<script lang="ts">
  import { getSeoHead, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'Privacy Policy — Balanced Solutions Software',
    description: 'Balanced Solutions Software privacy policy. We collect minimal data necessary to operate our services and communicate with clients effectively.',
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

<div class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="/favicon.svg" alt="Balanced Solutions" class="w-6 h-6" />
        <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Balanced Solutions</span>
      </div>
      <div class="flex items-center space-x-4">
        <a href="/" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</a>
        <a href="/about" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
        <a href="/services" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</a>
        <a href="/contact" class="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm">
          Get in Touch
        </a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Privacy
        <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Policy</span>
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Last updated: April 25, 2026
      </p>
    </div>
  </section>

  <!-- Content -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <!-- Introduction -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Introduction</h2>
        <p class="text-slate-400 mb-4">
          At Balanced Solutions Software ("we," "our," or "us"), we are committed to transparency about how we collect, use, and protect your information. This Privacy Policy explains our practices regarding data collection for individuals visiting our website and using our services.
        </p>
        <p class="text-slate-400">
          By accessing or using our website and services, you agree to the terms outlined in this Privacy Policy. If you do not agree with these practices, please do not use our services.
        </p>
      </div>

      <!-- Information We Collect -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Information We Collect</h2>
        
        <h3 class="text-lg font-semibold text-blue-400 mb-4">Information You Provide Directly</h3>
        <ul class="space-y-3 text-slate-400 mb-8">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Contact Information:</strong> When you reach out through our contact form, we collect your name, email address, and any message content you choose to provide.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Project Details:</strong> When discussing potential projects, we may collect information about your requirements, timelines, and business needs.</span>
          </li>
        </ul>

        <h3 class="text-lg font-semibold text-blue-400 mb-4">Information Collected Automatically</h3>
        <p class="text-slate-400 mb-6">We collect minimal data from website visitors. The following types of information may be collected:</p>
        <ul class="space-y-3 text-slate-400">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Log Data:</strong> Standard web server logs may collect your IP address, browser type, pages visited, and the page you visited before ours.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Device Information:</strong> We may collect information about the device you use, including hardware model, operating system version, and unique device identifiers.</span>
          </li>
        </ul>
      </div>

      <!-- How We Use Your Information -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">How We Use Your Information</h2>
        <p class="text-slate-400 mb-6">We use the information we collect for the following purposes:</p>
        <ul class="space-y-3 text-slate-400">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>To respond to your inquiries and provide customer support</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>To provide software development and consulting services</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>To communicate about project updates, deliverables, and important notices</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>To improve our website, services, and user experience</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>To comply with legal obligations and protect our rights</span>
          </li>
        </ul>
      </div>

      <!-- Data Sharing -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Data Sharing</h2>
        <p class="text-slate-400 mb-6">We do not sell your personal information. We may share your information in the following circumstances:</p>
        <ul class="space-y-3 text-slate-400">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering services.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests from public authorities.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets, your information may be shared as a business asset.</span>
          </li>
        </ul>
      </div>

      <!-- Data Security -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Data Security</h2>
        <p class="text-slate-400 mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p class="text-slate-400">
          While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to implementing industry-standard protections.
        </p>
      </div>

      <!-- Your Rights -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Your Rights</h2>
        <p class="text-slate-400 mb-6">Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul class="space-y-3 text-slate-400 mb-8">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Access:</strong> Request a copy of the personal data we hold about you.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Delete:</strong> Request deletion of your personal data where applicable.</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span><strong>Portability:</strong> Request transfer of your data in a machine-readable format.</span>
          </li>
        </ul>
        <p class="text-slate-400">To exercise these rights, please contact us at <a href="mailto:hello@balancedsolutions.com" class="text-blue-400 hover:text-cyan-300 transition-colors underline">hello@balancedsolutions.com</a></p>
      </div>

      <!-- Cookies -->
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Cookies</h2>
        <p class="text-slate-400 mb-4">
          We use minimal cookies on our website. Cookies are small text files stored on your device when you visit our site. They help us understand how visitors interact with our website and improve the user experience.
        </p>
        <p class="text-slate-400">
          You can control cookie settings through your browser preferences. Most browsers allow you to:
        </p>
        <ul class="space-y-2 text-slate-400 mt-3 ml-4">
          <li>&bull; Block or delete cookies</li>
          <li>&bull; Set your browser to notify you when a cookie is set</li>
          <li>&bull; Clear all cookies stored by your browser</li>
        </ul>
      </div>

  <!-- Contact CTA -->
  </div>
  </section>

  <section id="contact" class="py-12 px-6">
    <div class="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">
        Questions About Our Privacy Policy?
      </h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        If you have any questions about our privacy practices or would like to exercise your rights, please don't hesitate to reach out.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
        </a>
        <a href="mailto:hello@balancedsolutions.com" class="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
          Email Us Directly
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 px-6 border-t border-slate-800">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <img src="/favicon.svg" alt="Balanced Solutions" class="w-6 h-6" />
            <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Balanced Solutions
            </span>
          </div>
          <p class="text-slate-400 max-w-md">
            We build software products and partner with individuals and businesses to deliver development and consulting services.
          </p>
        </div>
        <div>
          <h3 class="text-white font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/services" class="hover:text-blue-400 transition-colors">Custom Development</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors">Cloud Migration</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors">System Integration</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors">Team Augmentation</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/about" class="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="/services" class="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="/contact" class="hover:text-blue-400 transition-colors">Contact</a></li>
            <li><a href="/privacy" class="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
       <div class="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
         <p>&copy; {new Date().getFullYear()} Balanced Solutions Software. All rights reserved.</p>
       </div>
    </div>
  </footer>
</div>