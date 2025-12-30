import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import PageTransition from '@/components/PageTransition'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Jayasri Jonnalagadda | AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Jayasri Jonnalagadda - AI/ML Engineer and Full Stack Developer specializing in LLMs, NLP, and scalable backend systems.',
  keywords: ['AI', 'ML', 'Full Stack', 'Developer', 'LLM', 'Python', 'TypeScript', 'React', 'Next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-dark-950 text-white`}>
        <SmoothScroll>
          <div className="noise-overlay" />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
