import ProgressBar from '@/components/Charts/Progress/ProgressBar'
import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer } from '@/components/Elements/Spacer'
import { MsKlimadashboardIconsEWindkraft } from '@/components/Icons/Energie'
import { format } from 'date-fns'

// @ts-ignore
import WindData from '@/assets/data/bestand-windanlagen.csv'

interface WindDataType {
  ZEIT: string
  AnzahlAnlagen: number
  AnzahlSolarModule: number
  Bruttoleistung: number
  Nettonennleistung: number
}

export default function WindEnergyTile() {
  const [data] = WindData as WindDataType[]

  return (
    <EnergyTile
      dataRetrieval={format(new Date(data.ZEIT), 'dd.MM.yyyy')}
      dataSource="Stadt Münster &ndash; Stadtplanungsamt"
      embedId="energy-wind"
      title={
        <>
          <AnimatedNumber>{data.Nettonennleistung / 1000}</AnimatedNumber> MW
        </>
      }
    >
      <div>
        <Title as={'subtitle'}>
          haben Organisationen bereits mit{' '}
          <span className="text-energy">
            <AnimatedNumber>{data.AnzahlAnlagen}</AnimatedNumber>{' '}
            Windkraftanlagen
          </span>{' '}
          in Münster installiert.
        </Title>
        <div className="mt-8 flex items-center justify-between gap-8">
          <MsKlimadashboardIconsEWindkraft className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" font="semibold" variant={'energy'}>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'}>
                  {(data.Nettonennleistung / 10 / 90).toFixed(0)}%
                </Title>
              </div>
              <div className="flex flex-col items-end">
                <Title as="h7" font="semibold" variant={'primary'}>
                  Angestrebtes Ziel bis 2030
                </Title>
                <Title as="h4" variant={'primary'}>
                  90 MW
                </Title>
              </div>
            </div>
            <Spacer size={'sm'} />
            <ProgressBar
              progress={data.Nettonennleistung / 10 / 90}
              variant="energy"
            />
          </div>
        </div>
      </div>
    </EnergyTile>
  )
}
