import BuildingTile from '../BuildingsTile'

// @ts-ignore
import EcoProfitData from '@/assets/data/oekoprofit.csv'
// @ts-ignore
import StartberatungData from '@/assets/data/teilnehmer-startberatung.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { format } from 'date-fns'

interface IEcoProfitData {
  ZEIT: number
  Betriebe: number
  'Einsparung - CO2': number
  'Einsparung - Wasser': number
  'Einsparung Abfälle': number
  'Einsparung Betriebskosten': number
  'Einsparung Energie': number
  'einmalige Investitionskosten': number
}

interface IStartberatungData {
  ZEIT: number
  'Teilnehmer Startberatung - Unternehmen': number
}

export default function EcoProfitTile() {
  const data = EcoProfitData as IEcoProfitData[]

  const startberatungData = StartberatungData as IStartberatungData[]

  const companiesTotal = data.reduce((acc, cur) => acc + cur.Betriebe, 0)
  const savingsCO2 = data.reduce((acc, cur) => acc + cur['Einsparung - CO2'], 0)
  const savingsEuro = data.reduce(
    (acc, cur) => acc + cur['Einsparung Betriebskosten'],
    0,
  )
  const companiesStartupConsulting = startberatungData.reduce(
    (acc, cur) => acc + cur['Teilnehmer Startberatung - Unternehmen'],
    0,
  )

  return (
    <BuildingTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster"
      embedId={'building-ecoProfit'}
    >
      <Title as={'h1'} font={'normal'} variant={'building'}>
        <AnimatedNumber>{companiesTotal}</AnimatedNumber> Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        haben bereits am Ökoprofit-Projekt teilgenommen und gemeinsam{' '}
        <span className="text-buildings">
          <AnimatedNumber decimals={1}>
            {savingsEuro / 1_000_000}
          </AnimatedNumber>{' '}
          Millionen Euro
        </span>{' '}
        und{' '}
        <span className="text-buildings">
          <AnimatedNumber>{savingsCO2}</AnimatedNumber> Tonnen CO
          <sub>2</sub>
        </span>{' '}
        eingespart.
      </Title>
      <Spacer size={'xl'} />
      <Title as={'h1'} font={'normal'} variant={'building'}>
        <AnimatedNumber>{companiesStartupConsulting}</AnimatedNumber>{' '}
        Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        haben bereits die „Startberatung Energieeffizienz“ genutzt und Maßnahmen
        zur Energieeinsparung entwickelt.
      </Title>
    </BuildingTile>
  )
}
