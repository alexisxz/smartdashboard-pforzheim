'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import type { EChartsOption } from 'echarts'
// @ts-ignore
import chargingData from '@/assets/data/ladesaeulenregister.csv'

interface ChargingStation {
  Betreiber: string
  'Anzeigename (Karte)': string
  Strasse: string
  Hausnummer: string
  Adresszusatz: string
  Postleitzahl: string
  Ort: string
  'Kreis/kreisfreie Stadt': string
  Bundesland: string
  Breitengrad: string
  Löngengrad?: string
  'L�ngengrad'?: string
  Inbetriebnahmedatum: string
  'Nennleistung Ladeeinrichtung [kW]': string
  'Art der Ladeeinrichung': string
  'Anzahl Ladepunkte': string
}

export default function ChangingStationChart() {
  const filteredData = (chargingData as ChargingStation[]).filter(
    row => row.Ort === 'Pforzheim',
  )

  // Map and accumulate number of charging points by month
  const dateMap = new Map<string, number>()

  filteredData.forEach(row => {
    const date = new Date(row.Inbetriebnahmedatum)
    if (isNaN(date.getTime())) {
      return
    }

    const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`

    const count = parseFloat(row['Anzahl Ladepunkte']) || 0
    dateMap.set(monthKey, (dateMap.get(monthKey) || 0) + count)
  })

  const sorted = Array.from(dateMap.entries()).sort(([a], [b]) =>
    a.localeCompare(b),
  )

  const xAxisData = sorted.map(([date]) => date)
  const yAxisData = sorted.map(([, count]) => count)

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      name: 'Inbetriebnahme (Monat)',
      nameLocation: 'middle',
      nameGap: 50, // increase the gap
      axisLabel: {
        rotate: 45,
        margin: 10, // space between label and axis
      },
    },
    yAxis: {
      type: 'value',
      name: 'Ladepunkte (Anzahl)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    series: [
      {
        name: 'Ladepunkte',
        data: yAxisData,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        lineStyle: { width: 2 },
        itemStyle: { color: '#34c17b' },
        areaStyle: {}, // Optional: adds a shaded area under the line
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: 80, // increase from '15%' to 80 to make room for rotated labels and axis name
    },
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
