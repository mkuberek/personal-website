import './globals.css'

export const metadata = {
  title: 'Fiber Demo',
  description: 'How to use react three fiber',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
