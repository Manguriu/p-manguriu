import './globals.css'
import {Footer,Navbar} from '@/components/ExportFile'




export const metadata = {
  title: 'Manguriu Portfolio',
  description: 'Created by the owner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
