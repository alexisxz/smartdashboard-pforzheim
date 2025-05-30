import PforzheimFooter from '@/components/Layout/Footer/PforzheimFooter'
import PforzheimNavbar from '@/components/Layout/Navbar/PforzheimNavbar'
import Providers from '@/components/Layout/Providers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* NAVBAR */}
      <PforzheimNavbar />
      <div className="flex-1">
        <Providers>{children}</Providers>
      </div>
      <PforzheimFooter />
    </div>
  )
}
