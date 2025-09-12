import climateHistoryData from '@/assets/data/climate_history.json'
import { format } from 'date-fns'
import ClimateTile from '../ClimateTile'
import RadarChart, { AvgTempData } from './RadarChart'

type ClimateHistoryRecord = {
  observation_type: string
  dwd_station_id: number
  wmo_station_id: any
  timestamp: string
  monthly_temperature: number
  temperature_deviation: number
}

const data = climateHistoryData as ClimateHistoryRecord[]

const climateYears = data.reduce((a: AvgTempData, o) => {
  const year = new Date(o.timestamp).getFullYear()
  const month = new Date(o.timestamp).getMonth()
  return {
    ...a,
    [year]: {
      ...a[year],
      [month]: o.temperature_deviation,
    },
  }
}, {})

export default function ClimateDevelopmentTile() {
  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Deutscher Wetterdienst"
      embedId="climate-development"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Temperaturabweichungen seit der vorindustriellen Zeit
          </div>
          <br />
          <div>
            Wetter und Klima werden oft verwechselt, meinen aber nicht dasselbe:{' '}
            <span className="font-semibold">Wetter</span> beschreibt
            kurzfristige Ereignisse – wie Regen, Sonne oder Wind – an einem
            bestimmten Ort zu einer bestimmten Zeit.{' '}
            <span className="font-semibold">Klima</span> dagegen ist der
            Durchschnitt des Wetters über einen langen Zeitraum, meist 30 Jahre,
            an einem Ort – in diesem Fall: Pforzheim.
          </div>
          <br />
          <div>
            Seit der Industrialisierung Mitte des 19. Jahrhunderts steigen die
            Temperaturen weltweit deutlich an. Die gezeigte Grafik orientiert
            sich an der bekannten Darstellung des britischen Klimaforschers{' '}
            <span className="font-semibold">Ed Hawkins</span>, der die weltweite
            Erwärmung durch farbige Temperaturstreifen sichtbar gemacht hat.{' '}
            <span className="text-red-600">
              Unsere Grafik zeigt die{' '}
              <span className="font-semibold">
                monatlichen Temperaturabweichungen in Pforzheim
              </span>{' '}
              im Vergleich zum langjährigen Mittel der Jahre 1853–1899.
            </span>
          </div>
          <br />
          <div>
            Diese Darstellung macht deutlich: Das Klima in Pforzheim hat sich
            messbar verändert. Die Folgen sind heute schon spürbar – etwa durch
            häufiger auftretende Hitzewellen, Starkregen oder Dürreperioden.
          </div>
        </div>
      }
      subtitle={
        'Temperaturabweichungen von den langjährigen Monatsmitteln vor 1900'
      }
      title={'Klima'}
    >
      <div className="h-[316px] w-full md:h-[528px]">
        <div className="w-full h-full">
          <RadarChart data={climateYears} />
        </div>
      </div>
    </ClimateTile>
  )
}
