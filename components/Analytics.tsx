import Script from 'next/script'

// Google Analytics + AdSense, loaded after the page is idle so they stay off the
// critical path. Consent Mode v2: storage is denied by default in the EEA, UK and
// Switzerland (regions where prior consent is required) and granted elsewhere until the
// visitor chooses in the consent banner; their choice is then applied on every page.
// The AdSense publisher is also declared via the google-adsense-account meta tag
// (layout metadata), so the script no longer has to block rendering.
const REGIONS = "'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'"

export default function Analytics() {
  return (
    <>
      <Script id="google-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', region: [${REGIONS}] });
          try {
            var c = localStorage.getItem('ugc-consent-v1');
            if (c === 'granted' || c === 'denied') {
              gtag('consent', 'update', { ad_storage: c, ad_user_data: c, ad_personalization: c, analytics_storage: c });
            }
          } catch (e) {}
          gtag('js', new Date());
          gtag('config', 'G-JXB67T29GN');
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JXB67T29GN" strategy="lazyOnload" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8322124399120159"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </>
  )
}
