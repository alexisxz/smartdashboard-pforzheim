import { format } from 'date-fns'
import MobilityTile from '../MobilityTile'
import BusContent from './BusContent'

export default function BusTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadtwerke Münster"
      embedId="mobility-bus"
      subtitle="Anzahl im Vergleich zu Bussen mit fossilem Antrieb"
      title="E-Busse"
    >
      <BusContent />
    </MobilityTile>
  )
}
