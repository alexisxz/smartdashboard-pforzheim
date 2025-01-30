import Providers from '@/components/Layout/Providers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      {/* <Navbar /> */}
      <div className="flex-1">
        <Providers>{children}</Providers>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
