import Columns from '../Layout/Columns'
import ClimateIndicesTile from '../Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '../Tiles/Climate/Devlopment'
import WeatherTile from '../Tiles/Climate/WeatherTile'
import Dwd from '../Tiles/Pforzheim-Charts/Dwd'
import BaseView from './BaseView'

export default function ClimateView() {
  return (
    <BaseView
      showGoToButton={false}
      showSuccessStories={false}
      showSurveys={false}
      type="climate"
    >
      <Columns>
        <WeatherTile />
        <ClimateDevelopmentTile />
      </Columns>
      <ClimateIndicesTile />
      <Dwd />
    </BaseView>
  )
}
