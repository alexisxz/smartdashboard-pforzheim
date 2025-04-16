import MSLogo from '@/assets/logos/stadtlogo-pforzheim.png'
import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsButtonAktivEnergieV1,
  MsKlimadashboardIconsButtonAktivGebaeude,
  MsKlimadashboardIconsButtonAktivKlima,
  MsKlimadashboardIconsButtonAktivMobil,
} from '@/components/Icons/Misc'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import StairStepBackground from '../StairStepBackground'
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

type BaseNavbarProps = {
  actionComponent?: React.ReactElement
  variant?: 'primary' | 'secondary' | 'overlay'
  children?: React.ReactElement | React.ReactElement[]
}

export default function BaseNavbar({
  actionComponent,
  variant = 'primary',
  children,
}: BaseNavbarProps) {
  return (
    <div className="pt-8">
      {/* Top Navbar */}
      <div className="container relative z-10 mx-auto flex translate-y-1/2 flex-row justify-start bg-white px-4 md:px-12">
        <Link href="/" target="_blank">
          <Image
            alt="Logo der Stadt Pforzheim"
            className="h-12 w-auto"
            src={MSLogo}
          />
        </Link>
      </div>
      {/* Bottom Navbar */}
      <StairStepBackground variant={variant}>
        <Container>
          <div className="xl:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-full border-2 border-primary p-2 md:p-4">
                  <Bars3Icon className="w-5 stroke-2 text-primary md:w-6" />
                </div>
              }
            >
              <div className="my-4 flex flex-col flex-wrap gap-2 md:flex-row">
                {links.map(l => (
                  <LinkComponent key={l.link} {...l} />
                ))}
              </div>
            </Collapsible>
            <Spacer size={'sm'} />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'}>
              <Title
                as="h2"
                variant={variant === 'overlay' ? 'inverse' : 'primary'}
              >
                Klimadashboard Pforzheim
              </Title>
            </Link>
            <div className="flex items-center justify-between">
              {actionComponent}

              <div className="hidden h-fit flex-wrap justify-end gap-2 xl:flex">
                {links.map(l => (
                  <LinkComponent
                    key={l.link}
                    variant={variant === 'overlay' ? 'inverse' : 'primary'}
                    {...l}
                  />
                ))}
              </div>
            </div>
          </div>
          {children && (
            <>
              <Spacer size={'xl'} />
              {children}
            </>
          )}
        </Container>
      </StairStepBackground>
    </div>
  )
}
