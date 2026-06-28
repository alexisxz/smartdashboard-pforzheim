import BaseView from './BaseView'

export default function EnergyView() {
  return (
    <BaseView
      showGoToButton={false}
      showSuccessStories={false}
      showSurveys={false}
      type="energy"
    >
      <div>Leider haben wir noch keine für Energie</div>
    </BaseView>
  )
}
