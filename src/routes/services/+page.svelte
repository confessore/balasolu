<script lang="ts">
  import { getSeoHead, getBaseUrl } from '$lib/seo';
  
  const seoConfig = {
    title: 'Services — Balanced Solutions Software',
    description: 'Explore our engineering services: custom development, cloud migration, system integration, data analytics, QA, and team augmentation. Built with product-quality engineering standards.',
    canonicalUrl: getBaseUrl() + '/services',
    ogType: 'website' as const,
    ogImage: `${getBaseUrl()}/static/og-image.png`,
    twitterCard: 'summary_large_image' as const,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' }
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
        Our Services
        <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Expertise</span>
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Development and consulting services for individuals and businesses. We bring product-quality engineering standards to every project.
      </p>
    </div>
  </section>

  <!-- Services Grid -->
  <section id="services" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Custom Development -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Custom Development</h3>
          <p class="text-slate-400 mb-4">
            Bespoke software solutions built with product-quality engineering and scalability in mind. We design systems that grow with your business.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Greenfield & brownfield projects
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Microservices architecture
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Legacy modernization
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            Discuss Your Project
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Cloud Migration -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Cloud Migration</h3>
          <p class="text-slate-400 mb-4">
            Seamless migration to AWS with security, compliance, and optimization. We minimize downtime during the transition.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              AWS
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Lift-and-shift to refactor
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Cost optimization
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            Start Migration
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- System Integration -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">System Integration</h3>
          <p class="text-slate-400 mb-4">
            Connect disparate systems seamlessly. We build APIs, event-driven architectures, and messaging solutions that make systems work together.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              REST & GraphQL APIs
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Event streaming (Kafka, RabbitMQ)
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Enterprise ERP/CRM integration
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            Explore Integration
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Data Analytics -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Data Analytics</h3>
          <p class="text-slate-400 mb-4">
            Build powerful data pipelines and analytics platforms with enterprise-grade security. Transform raw data into actionable insights.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              ETL/ELT pipelines
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Data warehousing
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Real-time analytics
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            View Solutions
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Quality Assurance -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.836 4.637c-2.952-.709-4.876 2.499-3.276 5.033l7.2 9.6a4.242 4.242 0 006.071 0l7.2-9.615c1.599-2.536-.325-5.743-3.277-5.034l-14.4 3.312z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Quality Assurance</h3>
          <p class="text-slate-400 mb-4">
            Rigorous testing procedures and CI/CD pipelines to ensure your code is production-ready before deployment.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Automated testing suites
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Performance testing
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Security testing & SAST/DAST
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            Learn About QA
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Team Augmentation -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 group">
          <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Team Augmentation</h3>
          <p class="text-slate-400 mb-4">
            Scale your engineering team with our engineers on a flexible, contract basis. We integrate seamlessly and deliver immediately.
          </p>
          <ul class="space-y-2 text-sm text-slate-500 mb-6">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Full-stack developers
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              DevOps engineers
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Technical leadership
            </li>
          </ul>
          <a href="/contact" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
            Add Developers
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Engagement Models -->
  <section class="py-20 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Engagement Models</h2>
        <p class="text-slate-400">
          Flexible arrangements to match your project needs
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div class="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Project-Based</h3>
          <p class="text-slate-400 mb-6">
            Dedicated team for a specific project. Fixed scope, timeline, and deliverables. Perfect for well-defined initiatives.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 font-medium text-sm">Learn More →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div class="w-14 h-14 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Dedicated Team</h3>
          <p class="text-slate-400 mb-6">
            Your extended team. We embed engineers who work directly with your team, reporting to your lead, while we handle infrastructure and management.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 font-medium text-sm">Learn More →</a>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div class="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Consulting</h3>
          <p class="text-slate-400 mb-6">
            Expert guidance without the long-term commitment. Strategic advice, architecture reviews, technology selection, and mentorship.
          </p>
          <a href="/contact" class="text-blue-400 hover:text-blue-300 font-medium text-sm">Learn More →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="contact" class="py-20 px-6">
    <div class="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">
        Ready to Discuss Your Project?
      </h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        Our experienced engineers are ready to help bring your ideas to life. Let's schedule a call to explore how we can support your engineering needs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:confessore@balasolu.com" class="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
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
