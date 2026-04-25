<script lang="ts">
  import { getSeoHead, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'About — Balanced Solutions Software',
    description: 'Learn about Balanced Solutions Software. We build our own software products and partner with individuals and businesses to deliver development and consulting services with product-quality engineering.',
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
        About
        <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Balanced Solutions</span>
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        We build our own software products and partner with individuals and businesses to deliver development and consulting services.
      </p>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
        <h2 class="text-2xl font-bold mb-6">Our Mission</h2>
        <p class="text-slate-400 mb-4">
          At Balanced Solutions, we do two things: we build our own software products, and we partner with individuals and businesses to deliver development and consulting services. This dual focus gives us a unique perspective — we bring the discipline and quality standards of product development to every client engagement.
        </p>
        <p class="text-slate-400 mb-4">
          We believe that the best software is built by engineers who care deeply about the craft. Our team brings years of experience building and maintaining complex systems, and we apply those same standards to every project we take on.
        </p>
        <p class="text-slate-400">
          Our approach balances product-quality engineering with flexible, client-focused delivery. Whether you're an individual with an idea or a business that needs dedicated development resources, we're here to help.
        </p>
      </div>
    </div>
  </section>

  <!-- Who We Are -->
  <section class="py-20 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">What Makes Us Different</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
          <h3 class="text-xl font-semibold mb-4">Product Builders</h3>
          <p class="text-slate-400">
            We build our own software products. This product development mindset means we think about maintainability, scalability, and user experience from day one. We bring that same product-quality approach to every client project we take on.
          </p>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
          <h3 class="text-xl font-semibold mb-4">Flexible Partners</h3>
          <p class="text-slate-400">
            We don't just build software — we partner with our clients. Whether you need a full build, ongoing development support, or expert advice, we adapt to your needs and work as an extension of your team.
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <h3 class="text-xl font-semibold mb-4">The Balanced Advantage</h3>
        <p class="text-slate-400 mb-6">
          Why choose Balanced Solutions? We combine the discipline of product development with the flexibility of consulting. Our engineers bring deep technical expertise while maintaining a client-first mindset.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <ul class="space-y-3 text-slate-400">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Product-quality engineering standards
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Flexible engagement models
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Transparent communication
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Deep expertise in modern technologies
            </li>
          </ul>
          <ul class="space-y-3 text-slate-400">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Proven track record of delivery
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Battle-tested development methodologies
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Seamless integration with your team
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Dedicated support and communication
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Our Team</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h3 class="text-xl font-semibold mb-4">Experienced Engineers</h3>
          <p class="text-slate-400 mb-4">
            Our team includes experienced engineers who have built and maintained complex software systems. They understand the nuances of enterprise software development: the need for maintainability, the importance of documentation, and the value of peer review.
          </p>
          <p class="text-slate-400">
            Each team member brings unique specialties — from frontend development and backend services to DevOps and QA — while sharing a commitment to the highest standards.
          </p>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h3 class="text-xl font-semibold mb-4">Leadership Experience</h3>
          <p class="text-slate-400 mb-4">
            Beyond individual expertise, we have leaders who have managed large-scale engineering teams and delivered complex programs. This experience translates into structured processes that enable rapid onboarding and consistent delivery.
          </p>
          <p class="text-slate-400">
            Our leadership helps navigate complex project dynamics, align technical decisions with business objectives, and ensure that every deliverable meets the highest expectations.
          </p>
        </div>
      </div>

      <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 class="text-xl font-semibold mb-6">Core Values</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"/>
              </svg>
            </div>
            <h4 class="font-semibold mb-2">Quality First</h4>
            <p class="text-sm text-slate-400">
              We treat quality as non-negotiable. Every line of code meets the highest standards.
            </p>
          </div>

          <div class="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 class="font-semibold mb-2">Client Partnership</h4>
            <p class="text-sm text-slate-400">
              We're invested in your success and operate as an extension of your team.
            </p>
          </div>

          <div class="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
            <div class="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6"/>
              </svg>
            </div>
            <h4 class="font-semibold mb-2">Continuous Learning</h4>
            <p class="text-sm text-slate-400">
              We stay ahead of technology trends and share knowledge with our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="contact" class="py-20 px-6">
    <div class="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">
        Ready to Work With Us?
      </h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        Our experienced engineers are ready to help bring your ideas to life. Whether you need a full build, ongoing partnership, or expert advice.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
        </a>
        <a href="/services" class="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
          View Services
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
