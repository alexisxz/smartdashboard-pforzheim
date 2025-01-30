import Columns from '../Layout/Columns'
import ClimateIndicesTile from '../Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '../Tiles/Climate/Devlopment'
import WeatherTile from '../Tiles/Climate/WeatherTile'
import StadtradelnTile from '../Tiles/Mobility/Bicycle/Stadtradeln'

export default function ExampleView() {
  return (
    <>
      <Columns>
        <WeatherTile />
        <ClimateDevelopmentTile />
      </Columns>
      <ClimateIndicesTile />
      <StadtradelnTile />
    </>
  )
}
