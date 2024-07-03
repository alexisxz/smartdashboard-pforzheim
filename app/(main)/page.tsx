import InsightsContainer from '@/components/Insights/InsightsContainer'
import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'

import Columns from '@/components/Layout/Columns'
import EnergyComsumptionTile from '@/components/Tiles/Buildings/EnergyConsumption'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import EnergietraegerTile from '@/components/Tiles/Energy/EnergietraegerTile'
import PhotovoltTile from '@/components/Tiles/Energy/PhotovoltTile'
import WindEnergyTile from '@/components/Tiles/Energy/WindEnergyTile'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import BusTile from '@/components/Tiles/Mobility/Bus'
import TrafficloadTile from '@/components/Tiles/Mobility/TrafficloadTile'
import BaseView from '@/components/Views/BaseView'

export default async function Home() {
  return (
    <div className="-translate-y-52">
      <AnimatedPage>
        <InsightsContainer />
        <Container>
          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="climate"
          >
            <CO2EmissionsTile />
            <Columns>
              <WeatherTile />
              <ClimateDevelopmentTile />
            </Columns>
            {/* <WachstumTile /> */}
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="energy"
          >
            <Columns>
              <PhotovoltTile />
              <WindEnergyTile />
              <EnergietraegerTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="mobility"
          >
            <TrafficloadTile />
            <Columns>
              <BusTile />
              <BicycleChartTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="building"
          >
            <EnergyComsumptionTile />
          </BaseView>
        </Container>
      </AnimatedPage>
    </div>
  )
}

export const revalidate = 10
