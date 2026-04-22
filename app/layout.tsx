import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Clickcore | Publicidad Digital · Meta Ads · Google Ads Argentina',
  description: 'Especialistas en campañas de Meta Ads y Google Ads. Estrategia, optimización continua y resultados reales para tu negocio. Solicitá tu diagnóstico gratuito.',
  keywords: ['meta ads argentina', 'google ads argentina', 'publicidad digital', 'paid media', 'campañas digitales', 'trafficker digital', 'clickcore', 'josefina arredondo'],
  authors: [{ name: 'Clickcore', url: 'https://www.clickcore.com.ar' }],
  openGraph: {
    title: 'Clickcore | Especialistas en Campañas Digitales',
    description: 'Tenés algo valioso para ofrecer. Hagamos que más personas lo descubran.',
    url: 'https://www.clickcore.com.ar',
    siteName: 'Clickcore',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clickcore | Paid Media · Meta Ads · Google Ads',
    description: 'Estrategia, campañas activas y optimización continua.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.clickcore.com.ar' },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Clickcore',
  description: 'Especialistas en campañas de Meta Ads y Google Ads. Estrategia y optimización continua.',
  url: 'https://www.clickcore.com.ar',
  telephone: '+542494004281',
  email: 'clickcoregrwmarketing@gmail.com',
  address: { '@type': 'PostalAddress', addressCountry: 'AR' },
  founder: { '@type': 'Person', name: 'Josefina Arredondo' },
  sameAs: ['https://www.instagram.com/clickcore.ar/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* META PIXEL — reemplazar XXXXXXXXXXXXXXX con el Pixel ID del cliente
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');`}
        </Script> */}

        {/* GOOGLE ADS TAG — reemplazar AW-XXXXXXXXX con el ID de conversión
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXX');`}
        </Script> */}

        {/* GOOGLE ANALYTICS — reemplazar G-XXXXXXXXXX con el Measurement ID
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');`}
        </Script> */}
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
