import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsWetterNiederschlag,
  MsKlimadashboardIconsWetterSonnig,
  MsKlimadashboardIconsWetterTemperatur,
  MsKlimadashboardIconsWetterWindgeschw,
  MsKlimadashboardIconsWetterWolkendichte,
} from '@/components/Icons/Klima'
import useDevice from '@/hooks/useDevice'
import { cx } from 'class-variance-authority'
import { ForwardRefExoticComponent, SVGProps } from 'react'

type PhenomenaType = {
  [key: string]: {
    title: string
    shortTitle?: string
    unit: string
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
      | React.ForwardRefExoticComponent<
          Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
          } & React.RefAttributes<SVGSVGElement>
        >
    decimals?: number
  }
}

const phenomena: PhenomenaType = {
  temperature: {
    title: 'Temperatur',
    unit: '°C',
    icon: MsKlimadashboardIconsWetterTemperatur,
    decimals: 0,
  },
  precipitation: {
    title: 'Niederschlag',
    unit: 'mm',
    icon: MsKlimadashboardIconsWetterNiederschlag,
  },
  cloudcover: {
    title: 'Wolken&shy;bedeckung',
    shortTitle: 'Wolkenbed.',
    unit: '%',
    icon: MsKlimadashboardIconsWetterWolkendichte,
  },
  windspeed: {
    title: 'Wind&shy;geschwindigkeit',
    shortTitle: 'Windgeschw.',
    unit: 'km/h',
    icon: MsKlimadashboardIconsWetterWindgeschw,
    decimals: 1,
  },
  sunhours: {
    title: 'Sonnenstunden',
    unit: 'h',
    icon: MsKlimadashboardIconsWetterSonnig,
  },
  no2: {
    title: 'Stickstoffdioxid (NO<sub>2</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
  },
  pm10: {
    title: 'Feinstaub (PM<sub>10</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
  },
  o3: {
    title: 'Ozon (O<sub>3</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
  },
  pm25: {
    title: 'Feinstaub (PM<sub>2.5</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
  },
}

type PhenomenonProps = {
  phenomenon: keyof typeof phenomena
  value: number
  icon?:
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
    | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
  size?: 'md' | 'xl'
}

export default function Phenomenon({
  phenomenon,
  value,
  icon,
  size = 'md',
}: PhenomenonProps) {
  const {
    title,
    unit,
    icon: phenomIcon,
    decimals,
    shortTitle,
  } = phenomena[phenomenon]

  const valueSize: 'h1' | 'h4' = size === 'xl' ? 'h1' : 'h4'

  const device = useDevice()

  const Icon = icon ? icon : phenomIcon

  return (
    <div className="my-1 flex items-center gap-3 md:my-2">
      <Icon
        className={cx(
          size === 'md' ? 'aspect-square' : 'w-6',
          icon ? '' : 'fill-primary stroke-primary text-primary',
          'h-10 md:h-14',
        )}
      />
      <div>
        <Title
          as={'h5'}
          dangerouslySetInnerHTML={{
            __html: device === 'mobile' && shortTitle ? shortTitle : title,
          }}
          variant={'primary'}
        ></Title>
        <Title as={valueSize} variant="climate">
          {typeof value === 'number' ? (
            <>
              <AnimatedNumber decimals={decimals}>{value}</AnimatedNumber>&nbsp;
              {unit}
            </>
          ) : (
            <>
              <span>--</span>
            </>
          )}{' '}
        </Title>
      </div>
    </div>
  )
}
