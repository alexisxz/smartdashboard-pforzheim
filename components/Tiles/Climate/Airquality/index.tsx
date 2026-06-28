import ClimateTile from '../ClimateTile'
import AirqualityChart from './AirqualityChart'

export default async function AirqualityTile() {
  return (
    <ClimateTile
      dataSource="Umweltbundesamt & Messstationen der Bundesländer"
      embedId="climate-airquality"
      live
      title={'Luftqualität'}
    >
      <AirqualityChart />
    </ClimateTile>
  )
}
