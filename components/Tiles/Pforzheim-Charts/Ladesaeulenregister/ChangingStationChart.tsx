// components/Charts/PerfectMatchChart.tsx
'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import type { EChartsOption } from 'echarts'
// Import your GeoJSON map for Pforzheim.
// Import your CSV data – adjust the path if needed.
// If your file has a .csv extension and you’ve configured csv-loader, it should import as an array of objects.
// @ts-ignore
import chargingData from '@/assets/data/ladesaeulenregister.csv'

// Define a TypeScript interface for the data you need.
// Define a TypeScript interface for the data you need.
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
  // Depending on encoding the longitude key might be one of these:
  Löngengrad?: string
  'L�ngengrad'?: string
  Inbetriebnahmedatum: string
  'Nennleistung Ladeeinrichtung [kW]': string
  'Art der Ladeeinrichung': string
  'Anzahl Ladepunkte': string
}

export default function ChangingStationChart() {
  // Filter the data for rows where Ort is exactly "Pforzheim"
  const filteredData = (chargingData as ChargingStation[]).filter(
    row => row.Ort === 'Pforzheim',
  )

  // Map the filtered data to extract numerical values.
  // Convert the relevant columns from strings to numbers.
  const seriesData = filteredData.map(row => {
    const ratedPower = parseFloat(row['Nennleistung Ladeeinrichtung [kW]']) || 0
    const chargingPoints = parseFloat(row['Anzahl Ladepunkte']) || 0
    return [ratedPower, chargingPoints]
  })

  // Define the ECharts option with explicit literal types and function formatters.
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        return `
          <strong>Nennleistung:</strong> ${params.value[0]} kW<br/>
          <strong>Ladepunkte:</strong> ${params.value[1]}
        `
      },
    },
    xAxis: {
      type: 'value' as const,
      name: 'Nennleistung [kW]',
      nameLocation: 'middle' as const,
      nameGap: 30,
      axisLabel: {
        formatter: (value: number) => `${value} kW`,
      },
    },
    yAxis: {
      type: 'value' as const,
      name: 'Anzahl Ladepunkte',
      nameLocation: 'middle' as const,
      nameGap: 40,
      axisLabel: {
        formatter: (value: number) => `${value}`,
      },
    },
    series: [
      {
        data: seriesData,
        type: 'scatter' as const,
        symbolSize: 10,
        itemStyle: { color: '#34c17b' },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '15%',
    },
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
