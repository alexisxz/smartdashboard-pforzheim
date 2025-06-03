'use client'

import { Button } from '../../Elements/Button'

import Back from '@/components/Elements/Back'
import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsNaviInfoI } from '@/components/Icons/Misc/Navi'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import BaseNavbar from './BaseNavbar'

const routeToType: {
  [key: string]:
    | 'climate'
    | 'mobility'
    | 'energy'
    | 'building'
    | 'impressum'
    | 'datenschutz'
    | 'feedback'
} = {
  klima: 'climate',
  mobilitaet: 'mobility',
  energie: 'energy',
  gebaeude: 'building',
  impressum: 'impressum',
  datenschutz: 'datenschutz',
  feedback: 'feedback',
}

export default function Navbar() {
  const pathname = usePathname()

  const [showOverlay, setShowOverlay] = useState(false)

  if (!pathname) {
    return <BaseNavbar></BaseNavbar>
  }

  const isIndexPage = pathname === '/'
  const [_, route] = pathname?.split('/')

  const ActionComponent = isIndexPage ? (
    <Button
      className="whitespace-nowrap"
      onClick={() => setShowOverlay(true)}
      size={'link'}
      startIcon={
        <MsKlimadashboardIconsNaviInfoI className="h-[26px] md:h-[34px]" />
      }
      variant={'secondary'}
    >
      So helfen Daten dem Klima
    </Button>
  ) : (
    <Back
      variant={
        ['impressum', 'datenschutz', 'feedback'].includes(route)
          ? 'inverse'
          : 'primary'
      }
    />
  )

  const InfoText = (
    <div className="lg:w-2/3 2xl:w-1/3">
      <Title as={'h5'} variant={'inverse'}>
        Wo steht Münster auf dem Weg zur Klimaneutralität? Und wo zeigen sich
        die Folgen des Klimawandels in Münster schon jetzt? Das City Dashboard
        der Stadt Pforzheim zeigt den aktuellen Datenstand zu verschiedenen
        Indikatoren von Klimaschutz und Anpassung an die Folgen des Klimawandels
        und schafft so mehr Transparenz in der gesamtstädtischen Klimaarbeit.
        Entwickelt wurde das City Dashboard der Stadt Pforzheim von der
        Stabsstelle Smart City und der Stabsstelle Klima der Stadt Münster mit
        Unterstützung von den Stadtwerken Münster und der Wirtschaftsförderung
        Münster. Wir arbeiten stetig daran, die Verfügbarkeit der Daten zu
        verbessern. Das City Dashboard der Stadt Pforzheim wird im Rahmen des
        Förderprogramms „Modellprojekte Smart Cities“ aus Mitteln des
        Bundesministeriums für Wohnen, Stadtentwicklung und Bauwesen (BMWSB)
        gefördert.
      </Title>
    </div>
  )

  const OverlayNavbar = (
    <BaseNavbar
      actionComponent={
        <Button
          className="whitespace-nowrap"
          onClick={() => setShowOverlay(false)}
          size={'link'}
          startIcon={<XMarkIcon className="h-[26px] text-white md:h-[34px]" />}
          variant={'secondary'}
        >
          <Title as="h5" variant={'inverse'}>
            Informationen ausblenden
          </Title>
        </Button>
      }
      variant="overlay"
    >
      {InfoText}
    </BaseNavbar>
  )

  if (isIndexPage) {
    return (
      <div className="relative">
        <BaseNavbar actionComponent={ActionComponent}>
          <div className="h-40" />
        </BaseNavbar>
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              animate={{ opacity: 1 }}
              className="absolute top-0 left-0 z-10 w-full h-full"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              {OverlayNavbar}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  if (
    [
      'klima',
      'energie',
      'mobilitaet',
      'gebaeude',
      'impressum',
      'datenschutz',
      'feedback',
    ].includes(route)
  ) {
    const sectionText: Record<string, string> = {
      klima:
        'Die Auswirkungen des Klimawandels in Pforzheim sind spür- und messbar. Pforzheim will klimaneutral und klimaangepasst und so der Verantwortung für ein „gutes Morgen“ gerecht werden. Dafür braucht es die gesamte Stadtgesellschaft!',
      energie:
        'Egal ob Zuhause, im Unternehmen oder als Kommune, diese Grundsätze sind die Bausteine einer erfolgreichen Energiewende: Die Vermeidung von Energieverbrauch hat oberste Priorität. Der nicht-vermeidbare Energiebedarf muss mit effizienter Technik verringert werden. Der dann noch verbleibende Energiebedarf muss mittelfristig komplett durch erneuerbare Energieträger gedeckt werden.',
      mobilitaet:
        'Das Ziel einer funktionierenden, klimafreundlichen Mobilität stellt eine wachsende Stadt wie Pforzheim vor eine große Herausforderung. Wenn die gesamte Stadtgesellschaft bereit ist, neue Wege zu gehen, kann diese Herausforderung gemeistert werden.',
      gebaeude:
        'Für das Ziel einer klimaneutralen und klimaangepassten Stadt kann die Rolle der Gebäude in Pforzheim kaum hoch genug eingeschätzt werden. Nicht nur das Einsparpotential von CO₂ ist in diesem Bereich besonders hoch. Auch können Gebäudeeigentümer*innen durch gezielte Maßnahmen Energiekosten sparen und ihr Gebäude vor Extremwetter schützen.',
    }

    return (
      <BaseNavbar
        actionComponent={ActionComponent}
        variant={
          ['impressum', 'datenschutz', 'feedback'].includes(route)
            ? 'overlay'
            : 'primary'
        }
      >
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-0">
          <div className="flex-1">
            <Title as="h5" variant="primary">
              {sectionText[route]}
            </Title>
          </div>
          <div className="flex justify-end flex-1">
            <SectionTitle large variant={routeToType[route]} />
          </div>
        </div>
      </BaseNavbar>
    )
  }

  return <BaseNavbar actionComponent={ActionComponent}></BaseNavbar>
}
