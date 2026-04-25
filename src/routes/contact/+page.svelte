<script lang="ts">
  import { getSeoHead, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'Contact — Balanced Solutions Software',
    description: 'Get in touch with Balanced Solutions Software. Our experienced engineers are ready to discuss your software development needs and help bring your project to life.',
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
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Get in Touch
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Ready to bring product-quality engineering to your project? Let's discuss your needs.
      </p>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="md:col-span-2">
          <div class="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-6">
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold mb-2">Email</h3>
                 <a href="mailto:confessore@balasolu.com" class="text-blue-400 hover:text-blue-300 transition-colors">
                   confessore@balasolu.com
                </a>
              </div>
              <div>
                <h3 class="font-semibold mb-2">Phone</h3>
                <a href="tel:+13522343458" class="text-blue-400 hover:text-blue-300 transition-colors">
                  352 234 3458
                </a>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 class="text-xl font-semibold mb-4">Quick Response Promise</h3>
            <p class="text-slate-400 mb-4">
              We aim to respond to all inquiries within 24 business hours. For urgent project needs, please call us directly.
            </p>
            <div class="flex items-center text-sm text-slate-400">
              <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Typical response: 2-4 hours</span>
            </div>
          </div>
        </div>
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
