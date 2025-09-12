import { format } from 'date-fns'
import ClimateTile from '../../Climate/ClimateTile'
import DWDChart from './DwdChart'

export default function DwdTile() {
  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Pforzheim"
      embedId="climate-dwd"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Niederschlag in Pforzheim – Regentage und Monatssummen im Überblick
          </div>
          <br />
          <div>
            Die Grafik zeigt zwei wichtige Aspekte des Niederschlags in
            Pforzheim: Zum einen{' '}
            <span className="font-semibold">
              die Anzahl der Regentage pro Monat
            </span>{' '}
            – also die Tage, an denen mindestens 1 Millimeter Niederschlag
            gemessen wurde – und zum anderen die{' '}
            <span className="font-semibold">Gesamtsumme des Niederschlags</span>{' '}
            in Millimetern pro Monat.
          </div>
          <br />
          <div>
            Während die Anzahl der Regentage einen Eindruck davon gibt,{' '}
            <span className="font-semibold">wie häufig es regnet</span>, zeigt
            die Monatssumme,{' '}
            <span className="font-semibold">
              wie viel Regen insgesamt gefallen ist
            </span>
            . Diese beiden Werte können stark voneinander abweichen: So kann es
            viele Tage mit leichtem Regen geben oder wenige Tage mit starkem
            Niederschlag.
          </div>
          <br />
          <div>
            Die Kombination beider Größen hilft dabei,{' '}
            <span className="font-semibold">
              den Niederschlagsverlauf besser zu verstehen
            </span>{' '}
            – etwa ob ein Monat eher durch häufige Schauer oder durch einzelne,
            intensivere Regenereignisse geprägt war. Die Werte schwanken von
            Jahr zu Jahr, was typische wetterbedingte Unterschiede
            widerspiegelt.
          </div>
        </div>
      }
      subtitle={'pro Jahr'}
      title={'Regentage'}
    >
      <div className="w-full">
        <div className="w-full h-full">
          <DWDChart />
        </div>
      </div>
    </ClimateTile>
  )
}
