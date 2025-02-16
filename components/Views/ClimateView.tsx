import Columns from '../Layout/Columns'
import AirqualityTile from '../Tiles/Climate/Airquality'
import ClimateIndicesTile from '../Tiles/Climate/ClimateIndices'
import CO2EmissionsTile from '../Tiles/Climate/CO2EmissionsTile'
import ClimateDevelopmentTile from '../Tiles/Climate/Devlopment'
import GarbageTile from '../Tiles/Climate/Garbage'
import Wachstum from '../Tiles/Climate/Wachstum'
import WeatherTile from '../Tiles/Climate/WeatherTile'
import DataCountTile from '../Tiles/Data/DataCountTile'
import BaseView from './BaseView'

export default function ClimateView() {
  return (
    <BaseView type="climate">
      <Columns>
        <WeatherTile />
        <ClimateDevelopmentTile />
      </Columns>

      <CO2EmissionsTile />

      <Wachstum />

      <ClimateIndicesTile />

      <GarbageTile />
      <Columns>
        <AirqualityTile />
        <DataCountTile />
      </Columns>
    </BaseView>
  )
}
