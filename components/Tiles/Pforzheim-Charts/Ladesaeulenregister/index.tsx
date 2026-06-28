import { format } from 'date-fns'
import MobilityTile from '../../Mobility/MobilityTile'
import ChangingStationChart from './ChangingStationChart'

export default function ChangingStationTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Bundesnetzagentur"
      embedId="mobility-station"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Ladeinfrastruktur in Pforzheim – Entwicklung der öffentlich
            zugänglichen Ladesäulen
          </div>
          <br />
          <div>
            Die Grafik zeigt,{' '}
            <span className="font-semibold">
              wann neue öffentlich zugängliche Ladepunkte
            </span>{' '}
            für Elektrofahrzeuge in Pforzheim in Betrieb genommen wurden und
            wie viele Ladepunkte insgesamt zu einem Zeitpunkt verfügbar waren.
            Grundlage der Daten ist das Ladesäulenregister der Bundesnetzagentur,
            das einen Überblick über den Ausbau der Ladeinfrastruktur in
            Deutschland bietet.
          </div>
          <br />
          <div>
            Erfasst werden dabei alle Ladepunkte, die öffentlich nutzbar sind –
            unabhängig vom Anbieter. Die Balken zeigen die neu hinzugekommenen
            Ladepunkte pro Monat, die Linie zeigt die kumulierte Gesamtzahl im
            Zeitverlauf.
          </div>
          <br />
          <div>
            Eine gut ausgebaute Ladeinfrastruktur ist ein wichtiger Bestandteil
            moderner Mobilität und unterstützt die Nutzung von Elektrofahrzeugen
            im Stadtgebiet.
          </div>
        </div>
      }
      //   subtitle={'Ladesäulenregister'}
      title={'Ladesäulenregister'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <ChangingStationChart />
        </div>
      </div>
    </MobilityTile>
  )
}
