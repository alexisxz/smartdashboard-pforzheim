import DeutschlandLogoMinister from '@/assets/logos/deutschland-logo-minister.png'
import PFLogo from '@/assets/logos/pforzheim-logo-footer.png'
import SmartLogo from '@/assets/logos/smart-city-logo.png'
import Title from '@/components/Elements/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function PforzheimFooter() {
  return (
    <div className="bg-[#66C6E0] text-white">
      <div className="container px-4 py-4 mx-auto md:py-8">
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[1fr_min-content_1fr_min-content_1fr]">
          {/* GRID 1 */}
          <div className="flex flex-col items-center gap-4">
            <Title as={'h6'} className="">
              Ein Projekt von
            </Title>
            <Image
              alt="Pforzheim Logo"
              className="object-cover px-8"
              src={PFLogo}
            />
            <Image
              alt="Pforzheim Logo"
              className="object-cover px-8"
              src={SmartLogo}
            />
          </div>
          {/* DIVIDER */}
          <div className="hidden h-full w-[1px] bg-white md:block"></div>
          {/* GRID 2 */}
          <div className="flex flex-col items-center gap-4">
            <Image
              alt="Pforzheim Logo"
              className="object-cover px-8"
              src={DeutschlandLogoMinister}
            />
          </div>
          {/* DIVIDER */}
          <div className="hidden h-full w-[1px] bg-white md:block"></div>
          {/* GRID 3 */}
          <div className="flex flex-col items-center gap-4">
            <Title as={'h6'} className="">
              Nützliche Links
            </Title>

            <Link className="underline" href="/datenschutz">
              Datenschutz
            </Link>
            <Link className="underline" href="/impressum">
              Impressum
            </Link>
            <Link className="underline" href="/adaptieren">
              Dieses Dashboard adaptieren
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
