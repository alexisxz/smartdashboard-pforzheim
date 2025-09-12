import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import ClimateIndicesChart from './ClimateIndicesChart'

export default async function ClimateIndicesTile() {
  const data = await getTileData('climate-indices')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Deutscher Wetterdienst"
      embedId="climate-indices"
      live
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Klimakenntage – Ein Überblick über besondere Wettertage
          </div>
          <br />
          <div>
            In Pforzheim lassen sich bestimmte Wetterphasen anhand sogenannter{' '}
            <span className="font-semibold">Klimakenntage</span> beschreiben.
            Dabei zeigen die Daten:{' '}
            <span className="font-semibold">
              Heiße Tage, Sommertage und Tropennächte
            </span>{' '}
            treten häufiger auf, während{' '}
            <span className="font-semibold">Eistage</span> seltener geworden
            sind. Diese Entwicklungen lassen sich anhand langjähriger
            Wetteraufzeichnungen gut nachvollziehen und geben einen Überblick
            über typische Temperaturverläufe im Jahresverlauf.
          </div>
          <br />
          <div>Hier ein Überblick über die wichtigsten Klimakenntage:</div>
          <br />
          <ul className="ml-6 space-y-2 list-disc">
            <li>
              <span className="font-semibold">Sommertag:</span> Die
              Tageshöchsttemperatur erreicht mindestens 25 °C.
            </li>
            <li>
              <span className="font-semibold">Heißer Tag (Hitzetag):</span> Die
              Temperatur steigt auf 30 °C oder mehr.
            </li>
            <li>
              <span className="font-semibold">Tropennacht:</span> Die Temperatur
              fällt in der Nacht nicht unter 20 °C – besonders belastend für den
              Körper, vor allem für ältere oder gesundheitlich angeschlagene
              Menschen.
            </li>
            <li>
              <span className="font-semibold">Frosttag:</span> Die Temperatur
              sinkt im Tagesverlauf mindestens einmal unter 0 °C.
            </li>
            <li>
              <span className="font-semibold">Eistag:</span> Die Temperatur
              bleibt den ganzen Tag über unter dem Gefrierpunkt (0 °C).
            </li>
          </ul>
        </div>
      }
      subtitle={'Häufigkeit von Temperaturkenntagen'}
      title="Klimakenntage"
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div className="bg-white rounded">
            <ClimateIndicesChart />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
}
