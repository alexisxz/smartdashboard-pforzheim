import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import ChartContainer from './ChartContainer'

export default async function StadtradelnTile() {
  const data = await getTileData('mobility-stadtradeln')
  const infoText = data?.info ?? ''

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
      <Title as="h5">{infoText}</Title>
    </MobilityTile>
  )
}
