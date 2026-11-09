/**
 * StructuredData Component (JSON-LD Schema Markup)
 * 
 * Purpose:
 * Gives search engines (Google, Bing) and AI systems (ChatGPT, Claude, Perplexity, Gemini)
 * clear, machine-readable data about INTELLEON.
 * 
 * Benefits:
 * 1. Enables Google Rich Results / Knowledge Graph cards.
 * 2. Improves GEO (Generative Engine Optimization) so AI search bots correctly identify and cite INTELLEON.
 */
export default function StructuredData() {
  const jsonLd = {
    // Defines the Schema.org vocabulary context for structured data standard
    "@context": "https://schema.org",

    // Specifies the core entity type (Organization / Business)
    "@type": "Organization",

    // Official brand identity name indexed by search engines and LLMs
    name: "INTELLEON",

    // Canonical primary URL of the business
    url: "https://www.intelleon.com",

    // Direct path to official brand logo icon for search result cards
    logo: "https://www.intelleon.com/favicon.ico",

    // High-level company description optimized for entity mapping and AI summaries
    description:
      "INTELLEON specializes in custom software development, delivering web, mobile, and enterprise solutions for your business.",

    // Founder entity markup connecting the organization to its creator profile
    founder: {
      "@type": "Person",
      name: "Anton Ranaweera",
    },

    // Entity Resolution & Identity Matching: Links official social profiles & repositories 
    // to verify brand legitimacy across search engines and prevent hallucination by AI bots
    sameAs: [
      "https://github.com/intelleoncom/",
      "https://www.linkedin.com/company/intelleon-io",
      "https://facebook.com/intelleon.io",
      "https://x.com/intelleon",
      "https://www.instagram.com/intelleon.io/"
    ],

    // Customer interaction protocol & preferred support communication language
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["English"],
    },

    // Service offerings catalog allowing AI search engines to directly map requested services to INTELLEON
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise & Web Applications",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
