import Image from 'next/image'

// Local image imports (adjust paths as necessary)
import BGImage from '@/assets/logos/bg-navbar-image.png'
import MSLogo from '@/assets/logos/stadtlogo-pforzheim.png'

// Icon imports
import {
  MsKlimadashboardIconsButtonAktivGebaeude,
  MsKlimadashboardIconsButtonAktivKlima,
  MsKlimadashboardIconsButtonAktivMobil,
} from '@/components/Icons/Misc'
import Link from 'next/link'
import LinkComponent, { LinkProps } from './LinkComponent'

const links: LinkProps[] = [
  {
    title: 'Klima in Pforzheim',
    icon: MsKlimadashboardIconsButtonAktivKlima,
    link: '/klima',
    hover: 'climate',
  },
  // {
  //   title: 'Energie',
  //   icon: MsKlimadashboardIconsButtonAktivEnergieV1,
  //   link: '#energie',
  //   hover: 'energy',
  // },
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
      <div className="container px-4 py-2 mx-auto md:py-4">
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
        <div className="absolute top-0 right-0 hidden w-1/2 h-full overflow-hidden md:block">
          <Image
            alt="Pforzheim background"
            fill
            priority
            src={BGImage}
            // style={{ objectFit: 'fill' }}
          />
        </div>
        <div className="container relative z-10 flex items-start justify-between px-4 py-6 mx-auto md:flex-row md:items-center md:py-8">
          <div className="flex flex-col items-start gap-4">
            {/* TITLE WRAPPER */}
            <div className="max-w-3xl space-y-3">
              <h1 className="text-2xl leading-tight md:text-4xl">
                Willkommen beim <br className="hidden md:block" />{' '}
                <span className="font-bold">
                  City Dashboard der Stadt Pforzheim
                </span>
              </h1>
              <h2 className="text-lg">
                Ihrem digitalen Zugang zu aktuellen und historischen
                Informationen rund um Klimaschutz, Energie, Mobilität und
                Stadtentwicklung.
              </h2>
              <p className="text-pretty">
                Das City Dashboard bietet eine transparente und leicht
                verständliche Übersicht über zentrale Daten und Entwicklungen in
                Pforzheim. Es zeigt auf, wie sich unsere Stadt in Bereichen wie
                CO₂-Emissionen, erneuerbare Energien, Verkehr, Gebäudenutzung
                und Bevölkerung entwickelt. Mit interaktiven Grafiken und
                aktuellen Kennzahlen können Sie auf einen Blick nachvollziehen,
                welche Fortschritte bereits erzielt wurden und wo weiterer
                Handlungsbedarf besteht.
                <br />
                <br />
                Dieses Tool richtet sich an alle Bürgerinnen und Bürger, die
                sich für die nachhaltige Entwicklung Pforzheims interessieren.
                Durch die Bereitstellung von Open Data fördert das Dashboard
                zudem die Zusammenarbeit zwischen Verwaltung, Wirtschaft und
                Zivilgesellschaft.
                <br />
                <br />
                Gemeinsam gestalten wir die Zukunft Pforzheims – transparent,
                nachhaltig und digital.
              </p>
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
