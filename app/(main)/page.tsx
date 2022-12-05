import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import Collapsible from '@/components/Elements/Collapsible'
import MoreDetails from '@/components/Elements/MoreDetails'
import { Spacer } from '@/components/Elements/Spacer'
import StairStepBackground from '@/components/Layout/StairStepBackground'
import Title from '@/components/Elements/Title'
import InsightsContainer from '@/components/Insights/InsightsContainer'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import Container from '@/components/Layout/Container'
import Columns from '@/components/Layout/Columns'
import SuccessStoryTile from '@/components/Tiles/SuccessStory'
import directus, {
  directusImage,
  successStoriesCollectionName,
} from '@/lib/directus'
import AnimatedPage from '@/components/Layout/AnimatedPage'

export default async function Home() {
  const { data: successStories } = await directus
    .items(successStoriesCollectionName)
    .readByQuery({
      filter: {
        status: 'published',
      },
      limit: 2,
    })

  return (
    <AnimatedPage>
      <InsightsContainer />
      <StairStepBackground variant="secondary">
        <Container>
          <Title size="lg">Daten im Fokus</Title>
          <Collapsible trigger={<MoreDetails className="mt-4" />}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              neque reprehenderit. Unde distinctio ipsa temporibus aliquam
              minima asperiores perferendis harum vel, vero, impedit ratione ut
              eligendi, tenetur sed accusantium nesciunt.
            </div>
          </Collapsible>
        </Container>
      </StairStepBackground>
      <Container>
        <Columns>
          <BicycleChartTile />
          <WeatherTile />
        </Columns>
        <CO2EmissionsTile />
        <Spacer />
        {successStories && successStories[0] && (
          <SuccessStoryTile
            image={directusImage(successStories[0].image)}
            imagePosition={successStories[0].image_position}
            link={successStories[0].link}
            text={successStories[0].text}
          ></SuccessStoryTile>
        )}
        {successStories && successStories[1] && (
          <SuccessStoryTile
            image={directusImage(successStories[1].image)}
            imagePosition={successStories[1].image_position}
            link={successStories[1].link}
            text={successStories[1].text}
          ></SuccessStoryTile>
        )}
      </Container>
    </AnimatedPage>
  )
}
