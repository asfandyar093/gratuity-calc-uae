// Site-wide JSON-LD (WebSite + Organization only; the calculator node is emitted by calculator pages), shared by the English
// and Arabic root layouts so both emit identical entity data.
export const siteSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.uaegratuitycheck.com/#website",
          "url": "https://www.uaegratuitycheck.com",
          "name": "UAE Gratuity Check",
          "description": "Free UAE gratuity calculator and UAE end-of-service calculator updated for 2026",
          "inLanguage": ["en-AE", "ar"],
          "publisher": { "@id": "https://www.uaegratuitycheck.com/#org" }
        },
        {
          "@type": "Organization",
          "@id": "https://www.uaegratuitycheck.com/#org",
          "name": "UAE Gratuity Check",
          "url": "https://www.uaegratuitycheck.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.uaegratuitycheck.com/logo.png",
            "width": 500,
            "height": 500
          },
          "foundingDate": "2024",
          "description": "Provider of free UAE end-of-service gratuity calculators and guides, based on Federal Decree-Law No. 33 of 2021.",
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@uaegratuitycheck.com",
            "contactType": "customer support"
          },
          "sameAs": [
            "https://www.linkedin.com/company/uae-gratuity-check"
          ],
          "knowsAbout": [
            "UAE Labour Law",
            "Federal Decree-Law No. 33 of 2021",
            "End-of-service gratuity calculation",
            "MOHRE regulations",
            "UAE expat employment rights"
          ]
        },
      ]
    }

// Calculator entity, emitted only on the pages that are the calculator (e.g. /ar).
export const calculatorNode = {
  "@type": "SoftwareApplication",
  "@id": "https://www.uaegratuitycheck.com/#calculator",
  "name": "UAE Gratuity Calculator",
  "alternateName": [
    "Gratuity Calculator UAE",
    "UAE End of Service Calculator",
    "Dubai Gratuity Calculator"
  ],
  "url": "https://www.uaegratuitycheck.com",
  "applicationCategory": "FinanceApplication",
  "applicationSubCategory": "End of service gratuity calculator",
  "operatingSystem": "Web",
  "description": "Free UAE gratuity calculator based on Federal Decree-Law No. 33 of 2021. Estimate end-of-service gratuity using basic salary, service period, unpaid leave, and the UAE two-year cap.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AED"
  },
  "featureList": [
    "UAE gratuity calculation",
    "UAE labor law gratuity estimate",
    "Dubai gratuity calculator",
    "Date-based service period input",
    "Unpaid leave deduction",
    "Accrual projection chart"
  ]
}
