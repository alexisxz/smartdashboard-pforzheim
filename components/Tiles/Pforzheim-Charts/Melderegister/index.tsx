import { format } from 'date-fns'
import BuildingTile from '../../Buildings/BuildingsTile'
import PopulationRegisterChart from './PopulationRegisterChart'

export default function PopulationRegisterTile() {
  return (
    <BuildingTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="building-population"
      subtitle={'Nach Stadtteil'}
      title={'Bevölkerungsentwicklung Einwohner'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <PopulationRegisterChart />
        </div>
      </div>
    </BuildingTile>
  )
}
