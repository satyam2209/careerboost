import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' })

export const metadata = {
  title: 'CareerBoost - AI Resume Builder & ATS Checker',
  description: 'Build professional resumes and optimize them for ATS systems. Land your dream job with CareerBoost.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
