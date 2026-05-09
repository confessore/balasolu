/**
 * Dynamically determines the base URL of the application.
 * Works in both development and production environments.
 */
export function getBaseUrl(): string {
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		return `${window.location.protocol}//${window.location.host}`;
	}

	// SSR fallback - use Vite's import.meta.env if available, otherwise default to production URL
	const envHost = (import.meta as any).env?.VITE_BASE_URL || '';
	if (envHost) return envHost.replace(/\/$/, '');

	return 'https://balasolu.com';
}

/**
 * SEO configuration interface.
 */
export interface SeoConfig {
	title: string;
	description?: string;
	canonicalUrl?: string;
	ogType?: 'website' | 'article' | 'profile' | 'book';
	ogImage?: string;
	ogLocale?: string;
	twitterCard?: 'summary' | 'summary_large_image';
	twitterSite?: string;
	breadcrumbs?: Array<{ name: string; url: string }>;
	imageAlt?: string;
}

/**
 * Generates all SEO-related <svelte:head> content from a configuration object.
 */
export function getSeoHead(config: SeoConfig) {
	const baseUrl =
		config.canonicalUrl &&
		!config.canonicalUrl.startsWith('http://') &&
		!config.canonicalUrl.startsWith('https://')
			? `${getBaseUrl()}${config.canonicalUrl}`
			: config.canonicalUrl || getBaseUrl();

	const fullTitle = config.title;
	const description = config.description || '';
	const ogType = config.ogType || 'website';
	const ogImage = config.ogImage || `${getBaseUrl()}/static/og-image.png`;
	const twitterCard = config.twitterCard || 'summary_large_image';
	const imageAlt = config.imageAlt || fullTitle;

	// Build structured JSON-LD breadcrumbs if provided
	let jsonLdBreadcrumbs: string | undefined;
	if (config.breadcrumbs && config.breadcrumbs.length > 0) {
		jsonLdBreadcrumbs = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [${config.breadcrumbs.map((b, i) => `\n    {\n      "@type": "ListItem",\n      "position": ${i + 1},\n      "name": "${escapeJson(b.name)}",\n      "item": "${baseUrl ? `${getBaseUrl()}${b.url}` : b.url}"\n    }`).join(',')}
  ]
}
</script>`;
	}

	return `
<title>${escapeHtml(fullTitle)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${baseUrl}">
<!-- Open Graph / Facebook -->
<meta property="og:type" content="${ogType}">
<meta property="og:url" content="${baseUrl}">
<meta property="og:title" content="${escapeHtml(fullTitle)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:alt" content="${escapeHtml(imageAlt)}">
<!-- Twitter -->
<meta name="twitter:card" content="${twitterCard}">
${config.twitterSite ? `<meta name="twitter:site" content="@${config.twitterSite.replace(/^@/, '')}">\n` : ''}<meta property="twitter:title" content="${escapeHtml(fullTitle)}">
<meta property="twitter:description" content="${escapeHtml(description)}">
<meta property="twitter:image" content="${ogImage}">
${jsonLdBreadcrumbs || ''}
`.trim();
}

/**
 * Organization JSON-LD structured data for the website.
 */
export function getOrganizationJsonLd() {
	return `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Balanced Solutions Software",
  "url": "${getBaseUrl()}",
  "logo": "${getBaseUrl()}/static/favicon.svg",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "confessore@balasolu.com",
    "contactType": "customer service"
  }
}</script>`;
}

/**
 * Escape special characters for HTML attributes.
 */
function escapeHtml(str: string): string {
	const amp = String.fromCharCode(38) + 'amp;';
	const lt = String.fromCharCode(60) + 'lt;';
	const gt = String.fromCharCode(62) + 'gt;';
	const quot = String.fromCharCode(34) + 'quot;';
	return str
		.replace(/&/g, amp)
		.replace(/</g, lt)
		.replace(/>/g, gt)
		.replace(/"/g, quot)
		.replace(/'/g, '&#39;');
}

/**
 * Escape special characters for JSON strings.
 */
function escapeJson(str: string): string {
	return str
		.replace(/\\/g, '\\\\')
		.replace(/"/g, '\\"')
		.replace(/\n/g, '\\n')
		.replace(/\r/g, '\\r');
}
