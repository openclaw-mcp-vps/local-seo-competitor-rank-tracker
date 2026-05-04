import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Local SEO Rank Tracker — Track Local Business Rankings vs Competitors',
  description: 'Monitor Google My Business rankings for local keywords against direct competitors. Track rankings over time and get competitor comparison dashboards.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66973fd6-fc5f-4ea8-921e-6aaeafe30502"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
