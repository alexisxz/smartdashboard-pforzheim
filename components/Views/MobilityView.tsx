import StadtradelnTile from '../Tiles/Mobility/Bicycle/Stadtradeln'
import JahresfahrleistungNachFahrzeugart from '../Tiles/Pforzheim-Charts/JahresfahrleistungNachFahrzeugart'
import Ladesaeulenregister from '../Tiles/Pforzheim-Charts/Ladesaeulenregister'
import BaseView from './BaseView'

export default function MobilityView() {
  return (
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
  )
}
