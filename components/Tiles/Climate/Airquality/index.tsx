import getTileData from '@/lib/api/getTileData'
import ClimateTile from '../ClimateTile'
import AirqualityChart from './AirqualityChart'

export default async function AirqualityTile() {
  const data = await getTileData('climate-airquality')
  const infoText = data?.info ?? ''

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
