export const metadata = {
  title: 'Quarks Test',
  description: 'For testing quarks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
