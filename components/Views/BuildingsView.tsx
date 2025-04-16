import Melderegister from '../Tiles/Pforzheim-Charts/Melderegister'
import BaseView from './BaseView'

export default function BuildingsView() {
  return (
    <BaseView
      showGoToButton={false}
      showSuccessStories={false}
      showSurveys={false}
      type="building"
    >
      <div id="gebaeude"></div>
      <Melderegister />
    </BaseView>
  )
}
