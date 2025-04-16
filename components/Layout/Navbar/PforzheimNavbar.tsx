import Image from 'next/image'

// Local image imports (adjust paths as necessary)
import BGImage from '@/assets/logos/bg-navbar-image.png'
import MSLogo from '@/assets/logos/stadtlogo-pforzheim.png'

// Icon imports
import {
  MsKlimadashboardIconsButtonAktivEnergieV1,
  MsKlimadashboardIconsButtonAktivGebaeude,
  MsKlimadashboardIconsButtonAktivKlima,
  MsKlimadashboardIconsButtonAktivMobil,
} from '@/components/Icons/Misc'
import Link from 'next/link'
import LinkComponent, { LinkProps } from './LinkComponent'

const links: LinkProps[] = [
  {
    title: 'Klima in Münster',
    icon: MsKlimadashboardIconsButtonAktivKlima,
    link: '/klima',
    hover: 'climate',
  },
  {
    title: 'Energie',
    icon: MsKlimadashboardIconsButtonAktivEnergieV1,
    link: '/energie',
    hover: 'energy',
  },
  {
    title: 'Mobilität',
    icon: MsKlimadashboardIconsButtonAktivMobil,
    link: '/mobilitaet',
    hover: 'mobility',
  },
  {
    title: 'Gebäude',
    icon: MsKlimadashboardIconsButtonAktivGebaeude,
    link: '/gebaeude',
    hover: 'buildings',
  },
]

export default function PforzheimNavbar() {
  return (
    <div>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <Link href={'/'}>
          <Image
            alt="Pforzheim Logo"
            height={60}
            priority
            src={MSLogo}
            width={60}
          />
        </Link>
      </div>
      <nav className="relative w-full bg-[#65C6E1] text-white">
        {/* Background image, positioned on the right */}
        <div className="absolute right-0 top-0 hidden h-full w-1/3 overflow-hidden md:block">
          <Image
            alt="Pforzheim background"
            fill
            priority
            src={BGImage}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container relative z-10 mx-auto flex items-start justify-between px-4 py-6 md:flex-row md:items-center md:py-8">
          <div className="flex flex-col items-start gap-4">
            {/* TITLE WRAPPER */}
            <div className="max-w-xl">
              <h1 className="text-2xl font-bold leading-tight md:text-4xl">
                KLIMADASHBOARD <br className="hidden md:block" /> PFORZHEIM
              </h1>
            </div>
            {/* LINKS */}
            <div className="flex flex-col flex-wrap gap-2 md:flex-row">
              {links.map(l => (
                <LinkComponent key={l.link} {...l} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
