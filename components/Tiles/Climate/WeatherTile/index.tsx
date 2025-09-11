import ClimateTile from '../ClimateTile'
import WeatherTileContent from './WeatherTileContent'

export default function WeatherTile() {
  return (
    <ClimateTile
      dataSource="Deutscher Wetterdienst"
      embedId={'climate-weather'}
      live
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Aktuelle Wetterlage – Daten vom Deutschen Wetterdienst (DWD)
          </div>
          <br />
          <div>
            Die eingeblendete Wetterkarte zeigt in Echtzeit die aktuelle
            Wetterlage für Pforzheim. Sie basiert auf Daten des Deutschen
            Wetterdienstes (DWD), der als nationale Wetterbehörde kontinuierlich
            Wetterdaten erhebt, analysiert und bei Bedarf Wetterwarnungen
            herausgibt.
          </div>
          <br />
          <div>
            Auch in Pforzheim sind die Auswirkungen des Klimawandels bereits
            spürbar: Die Zahl der Sonnenstunden nimmt zu, die
            Durchschnittstemperaturen steigen, und die Sommermonate zeigen sich
            zunehmend trockener. Gleichzeitig häufen sich extreme
            Wetterereignisse – dazu zählen starke Gewitter, heftiger Starkregen,
            Hitzeperioden oder Stürme.
          </div>
          <br />
          <div>
            Solche Extremwetterlagen, wie sie in den letzten Jahren immer
            häufiger auftreten, stellen für Bevölkerung, Infrastruktur und Natur
            wachsende Herausforderungen dar. Der Deutsche Wetterdienst
            informiert deshalb nicht nur über seine Website, sondern auch über
            die <span className="font-semibold">DWD WarnWetter-App</span>{' '}
            zuverlässig über bevorstehende Wettergefahren – etwa bei extremer
            Hitze, Starkregen oder Unwetter.
          </div>
          <br />
          <div>
            Mit der aktuellen Wetterkarte auf diesem Klimadashboard behalten Sie
            die Wetterentwicklung in Pforzheim stets im Blick – als Teil eines
            umfassenden Überblicks über das sich wandelnde Klima in unserer
            Region.
          </div>
        </div>
      }
      title={'Wetter aktuell'}
    >
      <WeatherTileContent />
    </ClimateTile>
  )
}
