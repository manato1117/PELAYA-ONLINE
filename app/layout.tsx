import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Pelaya École de Croisière',
  description: 'Apprenez la voile pas à pas — Pelaya e-learning & réservation',
}
export default function RootLayout({ children }:{children: React.ReactNode}){
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <header className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pelaya École de Croisière</h1>
          <nav className="space-x-4">
            <a href="/" className="underline">Accueil</a>
            <a href="/dashboard" className="underline">Espace membre</a>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="p-6 opacity-70">© Pelaya</footer>
      </body>
    </html>
  )
}
