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
  title: 'Clickcore | Marketing Digital · Redes Sociales · Publicidad Online Argentina',
  description: 'Impulsamos tu negocio con estrategia digital clara. Gestión de redes sociales, publicidad en Meta Ads y Google Ads, branding y automatización. Consultá gratis.',
  keywords: ['marketing digital argentina', 'gestión redes sociales', 'meta ads', 'google ads', 'publicidad digital', 'branding', 'clickcore', 'josefina arredondo'],
  authors: [{ name: 'Clickcore', url: 'https://www.clickcore.com.ar' }],
  openGraph: {
    title: 'Clickcore | Marketing Digital Argentina',
    description: 'Tenés algo valioso para ofrecer. Hagamos que más personas lo descubran.',
    url: 'https://www.clickcore.com.ar',
    siteName: 'Clickcore',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clickcore | Marketing Digital Argentina',
    description: 'Impulsamos negocios con estrategia digital clara.',
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
  description: 'Agencia de marketing digital. Gestión de redes sociales, publicidad y branding.',
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
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
