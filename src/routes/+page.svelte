<script lang="ts">
  import { getSeoHead, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'Balanced Solutions Software — Software Development & Consulting',
    description: 'We build software products and partner with individuals and businesses to deliver development and consulting services. Custom development, cloud migration, system integration, and team augmentation.',
    canonicalUrl: getBaseUrl(),
    ogType: 'website' as const,
    ogImage: `${getBaseUrl()}/static/og-image.png`,
    twitterCard: 'summary_large_image' as const,
    breadcrumbs: [
      { name: 'Home', url: '/' }
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
      <a href="/contact" class="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm">
        Get in Touch
      </a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-32 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10.622a1 1 0 01-1.42.573l-3.715.743a1 1 0 01-.832-1.629L11.3 1.046zm3.388 9.427l-1.57-1.57a1 1 0 01-1.42-.573l-3.715-3.715a1 1 0 01-.573-1.42l1.57-1.57a1 1 0 011.42.573l1.022 1.022 4.31-4.31a1 1 0 011.42 0l4.559 4.559a1 1 0 010 1.42l-4.31 4.31z" clip-rule="evenodd"/>
            </svg>
            Product Builders & Consultants
          </div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Software Development
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Consulting</span>
          </h1>
          <p class="text-xl text-slate-400 mb-8">
            We build our own software products and partner with individuals and businesses to deliver development and consulting services.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/contact" class="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
              Start Your Project
            </a>
            <a href="/about" class="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-medium transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-slate-700/50 p-8 flex items-center justify-center">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <svg class="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-2xl font-bold text-white mb-2">Products & Partnerships</p>
              <p class="text-slate-400">Built by Engineers</p>
            </div>
          </div>
          <div class="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-4 -left-4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>


  <!-- About Section -->
  <section id="about-section" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">What We Do</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          We're a software company that builds our own products and partners with individuals and businesses. We offer development and consulting services to help bring your ideas to life.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
          <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Custom Development</h3>
          <p class="text-slate-400 text-sm">
            We build software from the ground up — tailored to your needs, designed to scale.
          </p>
        </div>

        <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
          <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Consulting</h3>
          <p class="text-slate-400 text-sm">
            Strategic guidance on architecture, technology choices, and project planning.
          </p>
        </div>

        <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
          <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Security-First</h3>
          <p class="text-slate-400 text-sm">
            We build with security in mind, following industry-standard practices.
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 class="text-xl font-semibold mb-2">Our Approach</h3>
            <p class="text-slate-400 mb-4">
              We combine the discipline of product development with the flexibility of consulting. Whether you need a full build, ongoing partnership, or expert advice — we deliver.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Product development mindset
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Flexible engagement models
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Transparent communication
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Long-term partnership focus
              </li>
            </ul>
          </div>
          <div class="md:text-right">
            <p class="text-2xl font-bold text-white">
              Product-First
            </p>
            <p class="text-slate-400 text-sm">
              Development & Consulting
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-20 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <p class="text-slate-400">
          Development and consulting services for individuals and businesses
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Custom Development</h3>
          <p class="text-slate-400 text-sm mb-4">
            Bespoke software solutions built for your specific needs.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">Discuss Your Project →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Cloud Migration</h3>
          <p class="text-slate-400 text-sm mb-4">
            Migrate to AWS with security and compliance in mind.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">Start Migration →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828l-4.586 4.586a2 2 0 01-2.828 0l-4.586-4.586a2 2 0 010-2.828z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">System Integration</h3>
          <p class="text-slate-400 text-sm mb-4">
            Connect your systems with APIs, microservices, and messaging platforms.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">Explore Integration →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Data Analytics</h3>
          <p class="text-slate-400 text-sm mb-4">
            Build data pipelines and analytics platforms for your business.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">View Solutions →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.30a18.014 18.014 0 00-3.382-9.606m3.856 5.924a6.012 6.012 0 019.727 2.508l1.79 3.446"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Quality Assurance</h3>
          <p class="text-slate-400 text-sm mb-4">
            Testing and CI/CD pipelines to ensure your software is production-ready.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">Learn About QA →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
          <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Team Augmentation</h3>
          <p class="text-slate-400 text-sm mb-4">
            Scale your team with our engineers on a flexible, contract basis.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 text-sm font-medium">Add Developers →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Why Partner With Us</h2>
      <p class="text-slate-400 mb-12 max-w-2xl mx-auto">
        We build products and partner with businesses — we understand both sides because it's what we do.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h3 class="text-xl font-semibold mb-4">What We Build</h3>
          <ul class="space-y-3 text-slate-400">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Our own software products</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Custom solutions for clients</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Scalable, maintainable systems</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Modern tech stacks</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Clean, documented code</span>
            </li>
          </ul>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h3 class="text-xl font-semibold mb-4">How We Partner</h3>
          <ul class="space-y-3 text-slate-400">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Flexible engagement models</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Transparent communication</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Long-term partnership focus</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Expert guidance at every stage</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Individuals and businesses welcome</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="contact-section" class="py-20 px-6">
    <div class="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">
        Ready to Build Something Together?
      </h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        Whether you need a full build, ongoing partnership, or expert advice — we're here to help. Contact us today to discuss your needs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
        </a>
        <a href="tel:+13522343458" class="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
          Call Us
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
