import { format } from 'date-fns'
import ClimateTile from '../../Climate/ClimateTile'
import DWDChart from './DwdChart'

export default function DwdTile() {
  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="climate-dwd"
      subtitle={'pro Jahr'}
      title={'Regentage'}
    >
      <div className="w-full">
        <div className="h-full w-full">
          <DWDChart />
        </div>
      </div>
    </ClimateTile>
  )
}
