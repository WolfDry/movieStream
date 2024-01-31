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
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/card.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
