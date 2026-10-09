import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy | UAE Gratuity Check',
  description: 'How UAE Gratuity Check handles your data: calculations run in your browser, no salary details are stored, and how Google Analytics and AdSense consent works.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/privacy-policy' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: March 30, 2026</p>
        </div>
        <div className="card">
          <h2>Overview</h2>
          <p>UAE Gratuity Check operates uaegratuitycheck.com. All calculations run entirely in your browser — no salary data is ever sent to our servers.</p>
        </div>
        <div className="card">
          <h2>Information We Do Not Collect</h2>
          <p>We do not collect, store, or process your salary, years of service, or any personally identifiable information entered into the calculator.</p>
        </div>
        <div className="card">
          <h2>Google Analytics</h2>
          <p>We use Google Analytics 4 to collect usage data such as pages visited and device type. A cookie notice asks you to accept or reject analytics and advertising cookies. In the EEA, UK and Switzerland these cookies stay off until you accept; elsewhere they are on until you reject. You can change your choice by clearing this site&apos;s data in your browser.</p>
        </div>
        <div className="card">
          <h2>Google AdSense</h2>
          <p>We display ads served by Google AdSense. If you accept, Google may use cookies to personalise ads based on prior visits. If you reject (or are in a region where consent is required and have not accepted), ad and analytics storage is denied and ads are non-personalised. You can opt out of personalised ads at google.com/settings/ads.</p>
        </div>
        <div className="card">
          <h2>Contact</h2>
          <p>Email: info@uaegratuitycheck.com</p>
        </div>
        <Footer />
      </main>
    </>
  )
}