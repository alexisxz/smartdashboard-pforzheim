import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format } from 'date-fns'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  'Anzahl aller PV-Anlagen': number
  'Leistung aller Anlagen (Summe)': number
}

export default function PVAnlagenTile() {
  const allData = PVData as PVAnlagenDataType[]
  const data = allData.at(-1)!

  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource={'Stadt Münster'}
      embedId="energy-PVAnlagen"
      live
      title={
        <>
          <AnimatedNumber>{data['Anzahl aller PV-Anlagen']}</AnimatedNumber>{' '}
          PV-Anlagen
        </>
      }
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
}
