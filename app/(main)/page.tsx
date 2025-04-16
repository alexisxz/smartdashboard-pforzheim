import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'

import Columns from '@/components/Layout/Columns'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import BaseView from '@/components/Views/BaseView'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'
import StadtradelnTile from '@/components/Tiles/Mobility/Bicycle/Stadtradeln'
import Dwd from '@/components/Tiles/Pforzheim-Charts/Dwd'
import JahresfahrleistungNachFahrzeugart from '@/components/Tiles/Pforzheim-Charts/JahresfahrleistungNachFahrzeugart'
import Ladesaeulenregister from '@/components/Tiles/Pforzheim-Charts/Ladesaeulenregister'
import Melderegister from '@/components/Tiles/Pforzheim-Charts/Melderegister'

export default async function Home() {
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
