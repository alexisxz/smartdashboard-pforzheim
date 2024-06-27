import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import MobilityTile from '../MobilityTile'
import AWMContent from './AWMContent'

export default async function AWMTile() {
  const data = await getTileData('mobility-awm')
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Abfallwirtschaftsbetriebe Münster (awm)"
      embedId="mobility-awm"
      subtitle="Anzahl der elektrisch angetriebenen Nutzfahrzeuge im Vergleich zu Fahrzeugen mit fossilem Antrieb"
      title="E-Mobilität awm"
    >
      <AWMContent />
      <Spacer size={'lg'} />
      <Title as="h5">{infoText}</Title>
    </MobilityTile>
  )
}
