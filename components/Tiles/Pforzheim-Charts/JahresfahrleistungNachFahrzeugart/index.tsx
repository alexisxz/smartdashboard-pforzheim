import { format } from 'date-fns'
import MobilityTile from '../../Mobility/MobilityTile'
import MileageVehicleChart from './MileageVehicleChart'

export default function MileageVehicleTypeTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="mobility-mileage"
      subtitle={'Nach Fahrzeugart'}
      title={'Jahresfahrleistung'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <MileageVehicleChart />
        </div>
      </div>
    </MobilityTile>
  )
}
