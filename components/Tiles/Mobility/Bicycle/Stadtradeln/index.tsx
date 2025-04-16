import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { format } from 'date-fns'
import ChartContainer from './ChartContainer'

export default async function StadtradelnTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadtradeln"
      embedId="mobility-stadtradeln"
      subtitle="auf der Überholspur"
      title="Stadtradeln"
    >
      <ChartContainer />
      <Spacer />
      {/* <Title as="h5">{infoText}</Title> */}
      <Title as="h5">
        Auf die Leeze, fertig, los! Für mehr Radverkehr, Klimaschutz und
        Lebensqualität in die Pedale treten: Seit 2020 beteiligt sich die Stadt
        Pforzheim an der jährlich stattfindenden, dreiwöchigen bundesweiten
        Aktion „STADTRADELN“ des globalen Netzwerks „Klima-Bündnis“.
      </Title>
    </MobilityTile>
  )
}
