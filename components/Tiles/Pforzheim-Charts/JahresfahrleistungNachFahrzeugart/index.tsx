import { format } from 'date-fns'
import MobilityTile from '../../Mobility/MobilityTile'
import MileageVehicleChart from './MileageVehicleChart'

export default function MileageVehicleTypeTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="mobility-mileage"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Jahresfahrleistung nach Fahrzeugart – Entwicklung von 2018 bis 2022
          </div>
          <br />
          <div>
            Die Grafik zeigt die{' '}
            <span className="font-semibold">
              durchschnittliche Jahresfahrleistung
            </span>{' '}
            in Deutschland für verschiedene Fahrzeugarten.
          </div>
          <br />
          <div>Dargestellt werden die gefahrenen Kilometer pro Jahr für:</div>
          <br />
          <ul className="ml-6 space-y-2 list-disc">
            <li>
              <span className="font-semibold">Krafträder</span> (z. B.
              Motorräder und Motorroller)
            </li>
            <li>
              <span className="font-semibold">Personenkraftwagen (PKW)</span>
            </li>
            <li>
              <span className="font-semibold">Leichte Nutzfahrzeuge</span> (bis
              3,5 t, z. B. Lieferwagen und Transporter)
            </li>
            <li>
              <span className="font-semibold">Schwere Nutzfahrzeuge</span> (über
              3,5 t, z. B. LKW)
            </li>
          </ul>
          <br />
          <div>
            Die Werte geben Aufschluss darüber,{' '}
            <span className="font-semibold">
              wie stark unterschiedliche Fahrzeugtypen im Straßenverkehr genutzt
              werden
            </span>{' '}
            und wie sich deren Fahrleistung über die Jahre verändert hat.
            Einflüsse wie wirtschaftliche Entwicklungen, Verkehrsverlagerung
            oder auch temporäre Effekte wie die Corona-Pandemie können sich in
            den jährlichen Schwankungen widerspiegeln.
          </div>
          <br />
          <div>
            Diese Kennzahlen sind ein wichtiger Indikator für die
            Verkehrsentwicklung und liefern Anhaltspunkte für Mobilitäts- und
            Infrastrukturplanung.
          </div>
        </div>
      }
      subtitle={'Nach Fahrzeugart'}
      title={'Jahresfahrleistung'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <MileageVehicleChart />
        </div>
      </div>
    </MobilityTile>
  )
}
