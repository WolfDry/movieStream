import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieStream',
  description: 'Liste des films que je possède',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
