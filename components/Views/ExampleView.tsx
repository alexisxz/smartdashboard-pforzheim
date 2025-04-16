import AnimatedPage from '../Layout/AnimatedPage'
import Columns from '../Layout/Columns'
import Container from '../Layout/Container'
import ClimateIndicesTile from '../Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '../Tiles/Climate/Devlopment'
import WeatherTile from '../Tiles/Climate/WeatherTile'
import StadtradelnTile from '../Tiles/Mobility/Bicycle/Stadtradeln'
import Dwd from '../Tiles/Pforzheim-Charts/Dwd'
import JahresfahrleistungNachFahrzeugart from '../Tiles/Pforzheim-Charts/JahresfahrleistungNachFahrzeugart'
import Ladesaeulenregister from '../Tiles/Pforzheim-Charts/Ladesaeulenregister'
import Melderegister from '../Tiles/Pforzheim-Charts/Melderegister'
import BaseView from './BaseView'

export default async function ExampleView() {
  return (
    <div>
      <AnimatedPage>
        {/* <InsightsContainer /> */}

        <Container>
          <div id="klima"></div>
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

          <BaseView
            showGoToButton={false}
            showSuccessStories={false}
            showSurveys={false}
            type="mobility"
          >
            <div id="mobilitaet"></div>
            <StadtradelnTile />
            <Ladesaeulenregister />
            <JahresfahrleistungNachFahrzeugart />
          </BaseView>

          <BaseView
            showGoToButton={false}
            showSuccessStories={false}
            showSurveys={false}
            type="building"
          >
            <div id="gebaeude"></div>
            <Melderegister />
          </BaseView>
        </Container>
      </AnimatedPage>
    </div>
  )
}

export const revalidate = 10
