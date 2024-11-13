import { FeatureCollection, Point } from 'geojson'
import { useEffect, useState } from 'react'

export type AirQualityStationData = {
  Station: string
  'Station-ID': string
  Zeitpunkt: string
  Luftqualitätsindex: number
  'Feinstaub (PM₁₀)': number
  'Ozon (O₃)': string | number
  'Stickstoffdioxid (NO₂)': number
  'Feinstaub (PM₂,₅)': number
  'Fehlender Wert'?: string
}

type AirQualityFeatureCollection = FeatureCollection<
  Point,
  AirQualityStationData
>

export default function useAirquality() {
  const [data, setData] = useState<AirQualityFeatureCollection | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://www.muenster01.de/luftqualitaet/data/luftqualitaet_muenster.geojson',
    )
      .then(res => res.json())
      .then(airQualityData => {
        setData(airQualityData)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { data, isLoading }
}
