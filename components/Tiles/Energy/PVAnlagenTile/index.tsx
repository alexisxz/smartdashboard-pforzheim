import { format } from 'date-fns'
import EnergyTile from '../EnergyTile'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  ZEIT: number
  'Anzahl aller PV-Anlagen': number
  'Leistung aller Anlagen (Summe)': number
}

export default function PVAnlagenTile() {
  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource={'Stadt Münster'}
      embedId="energy-PVAnlagen"
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
}
