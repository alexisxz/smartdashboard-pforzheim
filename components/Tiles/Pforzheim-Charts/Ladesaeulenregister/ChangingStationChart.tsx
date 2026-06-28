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

type ChargingPointMonthlyData = {
  monthKey: string
  monthLabel: string
  monthlyChargingPoints: number
  cumulativeChargingPoints: number
}

const formatNumber = (value: number): string =>
  value.toLocaleString('de-DE', { maximumFractionDigits: 0 })

const formatMonth = (monthKey: string): string => {
  const [year, month] = monthKey.split('-').map(Number)

  return new Intl.DateTimeFormat('de-DE', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, 1))
}

const getMonthKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

const getMonthRange = (start: string, end: string): string[] => {
  const result: string[] = []
  const [startYear, startMonth] = start.split('-').map(Number)
  const [endYear, endMonth] = end.split('-').map(Number)
  const current = new Date(startYear, startMonth - 1, 1)
  const final = new Date(endYear, endMonth - 1, 1)

  while (current <= final) {
    result.push(getMonthKey(current))
    current.setMonth(current.getMonth() + 1)
  }

  return result
}

const parseChargingPoints = (value: string): number => {
  const parsed = Number(String(value).trim().replace(',', '.'))

  return Number.isFinite(parsed) ? parsed : NaN
}

export default function ChangingStationChart() {
  const filteredData = (chargingData as ChargingStation[]).filter(
    row => row.Ort?.toLowerCase().includes('pforzheim'),
  )

  const monthlyMap = new Map<string, number>()

  filteredData.forEach(row => {
    const date = new Date(row.Inbetriebnahmedatum)
    if (isNaN(date.getTime())) {
      return
    }

    const chargingPoints = parseChargingPoints(row['Anzahl Ladepunkte'])
    if (!Number.isFinite(chargingPoints)) {
      return
    }

    const monthKey = getMonthKey(date)
    monthlyMap.set(
      monthKey,
      (monthlyMap.get(monthKey) || 0) + chargingPoints,
    )
  })

  const sortedMonths = Array.from(monthlyMap.keys()).sort()
  const monthRange =
    sortedMonths.length > 0
      ? getMonthRange(sortedMonths[0], sortedMonths[sortedMonths.length - 1])
      : []
  let cumulativeChargingPoints = 0
  const chartData: ChargingPointMonthlyData[] = monthRange.map(monthKey => {
    const monthlyChargingPoints = monthlyMap.get(monthKey) || 0
    cumulativeChargingPoints += monthlyChargingPoints

    return {
      monthKey,
      monthLabel: formatMonth(monthKey),
      monthlyChargingPoints,
      cumulativeChargingPoints,
    }
  })

  const xAxisData = chartData.map(({ monthLabel }) => monthLabel)
  const monthlyChargingPoints = chartData.map(
    ({ monthlyChargingPoints }) => monthlyChargingPoints,
  )
  const cumulativeChargingPointsData = chartData.map(
    ({ cumulativeChargingPoints }) => cumulativeChargingPoints,
  )

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const rows = Array.isArray(params) ? params : [params]
        const monthly = rows.find(
          (row: any) => row.seriesName === 'Neue Ladepunkte pro Monat',
        )
        const cumulative = rows.find(
          (row: any) => row.seriesName === 'Ladepunkte gesamt',
        )
        const month = rows[0]?.axisValue ?? ''

        return [
          `Monat: ${month}`,
          `Neue Ladepunkte: ${formatNumber(monthly?.data ?? 0)}`,
          `Ladepunkte gesamt: ${formatNumber(cumulative?.data ?? 0)}`,
        ].join('<br/>')
      },
    },
    legend: {
      data: ['Neue Ladepunkte pro Monat', 'Ladepunkte gesamt'],
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        rotate: 45,
        margin: 10,
      },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Neue Ladepunkte',
        nameLocation: 'middle',
        nameGap: 40,
        axisLabel: {
          formatter: (value: number) => formatNumber(value),
        },
      },
      {
        type: 'value',
        name: 'Ladepunkte gesamt',
        nameLocation: 'middle',
        nameGap: 48,
        position: 'right',
        axisLabel: {
          formatter: (value: number) => formatNumber(value),
        },
      },
    ],
    series: [
      {
        name: 'Neue Ladepunkte pro Monat',
        data: monthlyChargingPoints,
        type: 'bar',
        yAxisIndex: 0,
        barMaxWidth: 26,
        itemStyle: { color: '#34c17b', borderRadius: [2, 2, 0, 0] },
      },
      {
        name: 'Ladepunkte gesamt',
        data: cumulativeChargingPointsData,
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        lineStyle: { color: '#006080', width: 3 },
        itemStyle: { color: '#006080' },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: 100,
    },
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
