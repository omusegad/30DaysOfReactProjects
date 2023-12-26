export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="container mx-auto">{children}</section>
  }