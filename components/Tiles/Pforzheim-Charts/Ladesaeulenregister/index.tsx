import { format } from 'date-fns'
import MobilityTile from '../../Mobility/MobilityTile'
import ChangingStationChart from './ChangingStationChart'

export default function ChangingStationTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Bundesnetzagentur"
      embedId="mobility-station"
      //   subtitle={'Ladesäulenregister'}
      title={'Ladesäulenregister'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <ChangingStationChart />
        </div>
      </div>
    </MobilityTile>
  )
}
