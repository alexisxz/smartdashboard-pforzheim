import { format } from 'date-fns'
import BuildingTile from '../../Buildings/BuildingsTile'
import PopulationRegisterChart from './PopulationRegisterChart'

export default function PopulationRegisterTile() {
  return (
    <BuildingTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="building-population"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Haushaltsentwicklung nach Stadtteilen in Pforzheim
          </div>
          <br />
          <div>
            Die Grafik zeigt die{' '}
            <span className="font-semibold">
              Entwicklung der Anzahl privater Haushalte
            </span>{' '}
            in den einzelnen{' '}
            <span className="font-semibold">Stadtteilen von Pforzheim</span>{' '}
            über mehrere Jahre. Für jeden Stadtteil werden die{' '}
            <span className="font-semibold">Jahreswerte</span> dargestellt,
            wodurch sich Unterschiede und Veränderungen im Zeitverlauf gut
            erkennen lassen.
          </div>
          <br />
          <div>
            Die Anzahl der Haushalte kann unabhängig von der Bevölkerungszahl
            steigen oder sinken – zum Beispiel durch kleinere Haushaltsgrößen,
            Wohnungsneubau oder Veränderungen in der Altersstruktur.
          </div>
          <br />
          <div>
            Die Daten bieten wichtige Anhaltspunkte für die{' '}
            <span className="font-semibold">Stadtentwicklung</span>, etwa für
            die Planung von Wohnraum, Infrastruktur oder sozialen Angeboten in
            den verschiedenen Stadtteilen.
          </div>
        </div>
      }
      subtitle={'Nach Stadtteil'}
      title={'Bevölkerungsentwicklung Haushalte'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <PopulationRegisterChart />
        </div>
      </div>
    </BuildingTile>
  )
}
