import climateHistoryData from '@/assets/data/climate_history.json'
import { format } from 'date-fns'
import ClimateTile from '../ClimateTile'

type ClimateHistoryRecord = {
  observation_type?: string
  dwd_station_id?: number | null
  wmo_station_id?: number | null
  timestamp: string
  monthly_temperature?: number
  temperature_deviation: number
  location?: string
  baseline?: string
  unit?: string
  source?: string
  source_url?: string
  stripe_color?: string
}

type ClimateHistoryData =
  | ClimateHistoryRecord[]
  | {
      data: ClimateHistoryRecord[]
      metadata?: Record<string, string>
    }

type WarmingStripe = {
  year: number
  deviation: number
  color?: string
}

function getStripeColor(value: number): string {
  if (value <= -1.85) {
    return '#001944'
  }
  if (value <= -1.5) {
    return '#08306b'
  }
  if (value <= -1.2) {
    return '#08519c'
  }
  if (value <= -0.9) {
    return '#2171b5'
  }
  if (value <= -0.7) {
    return '#4292c6'
  }
  if (value <= -0.5) {
    return '#6baed6'
  }
  if (value <= -0.3) {
    return '#9ecae1'
  }
  if (value <= -0.1) {
    return '#c6dbef'
  }
  if (value < 0.1) {
    return '#deebf7'
  }
  if (value < 0.3) {
    return '#fee0d2'
  }
  if (value < 0.55) {
    return '#fcbba1'
  }
  if (value < 0.8) {
    return '#fc9272'
  }
  if (value < 1) {
    return '#fb6a4a'
  }
  if (value < 1.2) {
    return '#ef3b2c'
  }
  if (value < 1.45) {
    return '#cb181d'
  }
  if (value < 1.7) {
    return '#a50f15'
  }
  if (value < 1.95) {
    return '#67000d'
  }
  return '#440007'
}

const rawClimateHistoryData = climateHistoryData as ClimateHistoryData
const data = Array.isArray(rawClimateHistoryData)
  ? rawClimateHistoryData
  : rawClimateHistoryData.data

const warmingStripes: WarmingStripe[] = data
  .map(item => ({
    year: new Date(item.timestamp).getFullYear(),
    deviation: Number(item.temperature_deviation),
    color: item.stripe_color,
  }))
  .filter(item => Number.isFinite(item.year) && Number.isFinite(item.deviation))
  .sort((a, b) => a.year - b.year)

const firstYear = warmingStripes[0]?.year ?? 1850
const lastYear = warmingStripes[warmingStripes.length - 1]?.year ?? 2025
const labelYears = [1850, 1880, 1910, 1940, 1970, 2000, 2025].filter(
  year => year >= firstYear && year <= lastYear,
)

export default function ClimateDevelopmentTile() {
  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="showyourstripes.info / University of Reading"
      embedId="climate-development"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            Warming Stripes für Stuttgart seit 1850
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
            Temperaturen weltweit deutlich an. Die gezeigte Grafik nutzt die
            bekannte Warming-Stripes-Darstellung des britischen Klimaforschers{' '}
            <span className="font-semibold">Ed Hawkins</span>. Jeder Streifen
            steht für ein Jahr: Blau markiert kältere, Rot wärmere Jahre im
            Vergleich zum Mittelwert 1961–2010.
          </div>
          <br />
          <div>
            Verwendet werden die für Stuttgart veröffentlichten Daten von
            showyourstripes.info, da sie die regionale Temperaturentwicklung bis
            2025 abbilden.
          </div>
        </div>
      }
      subtitle={'Temperaturveränderung in Stuttgart seit 1850'}
      title={'Klima'}
    >
      <div className="flex h-[316px] w-full flex-col rounded-lg bg-white p-4 md:h-[528px] md:p-7">
        <div
          aria-label="Warming Stripes für Stuttgart seit 1850"
          className="grid min-h-0 flex-1 overflow-hidden"
          role="img"
          style={{
            gridTemplateColumns: `repeat(${warmingStripes.length}, minmax(1px, 1fr))`,
          }}
        >
          {warmingStripes.map(item => (
            <div
              className="h-full min-w-0"
              key={item.year}
              style={{
                backgroundColor: item.color ?? getStripeColor(item.deviation),
              }}
              title={`${item.year}: ${item.deviation.toFixed(2)} °C`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between text-xs font-semibold text-[#006080] md:text-base">
          {labelYears.map(year => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </div>
    </ClimateTile>
  )
}
