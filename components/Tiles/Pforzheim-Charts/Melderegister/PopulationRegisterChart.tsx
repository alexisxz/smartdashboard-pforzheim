// components/Charts/PopulationRegisterChart.tsx
'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import Slider from '@/components/Inputs/Slider'
import type { EChartsOption } from 'echarts'
import { useState } from 'react'

// Import your CSV data (ensure the file path is correct)
//@ts-ignore
import populationData from '@/assets/data/melderegister.csv'

// Define the interface for your CSV data.
interface PopulationData {
  Jahr: string
  Oststadt: string | number
  Innenstadt2: string | number
  Weststadt: string | number
  Südweststadt: string | number
  Au: string | number
  Südoststadt: string | number
  Buckenberg: string | number
  Nordstadt: string | number
  Brötzingen: string | number
  Dillweißenstein: string | number
  Würm: string | number
  Hohenwart: string | number
  Büchenbronn: string | number
  Huchenfeld: string | number
  Eutingen: string | number
}

// Helper function to parse a value (removes quotes/commas) and convert to a number.
const parseValue = (val: any): number => {
  if (val === null || val === undefined) {return 0}
  const valStr = typeof val === 'string' ? val : String(val)
  if (!valStr.trim() || valStr.trim() === '-') {return 0}
  const cleaned = valStr.replace(/"/g, '').replace(/,/g, '')
  return parseFloat(cleaned)
}

// Updated helper function to format numbers in German style.
// For example, 4473 becomes "4.473".
const formatNumber = (num: number): string =>
  num.toLocaleString('de-DE', { minimumFractionDigits: 0 })

// List of city columns (exclude "Jahr").
const cityColumns = [
  'Oststadt',
  'Innenstadt2',
  'Weststadt',
  'Südweststadt',
  'Au',
  'Südoststadt',
  'Buckenberg',
  'Nordstadt',
  'Brötzingen',
  'Dillweißenstein',
  'Würm',
  'Hohenwart',
  'Büchenbronn',
  'Huchenfeld',
  'Eutingen',
]

export default function PopulationRegisterChart() {
  // Cast the imported CSV data.
  const rawData = populationData as unknown as PopulationData[]

  // Extract all years from the data.
  // Assume the CSV contains years as strings.
  // Sort descending to have newest first.
  const allYears = Array.from(new Set(rawData.map(row => row.Jahr))).sort(
    (a, b) => Number(b) - Number(a),
  )
  // Take only the last 5 years (newest 5); these are still sorted descending.
  const filteredYearsDesc = allYears.slice(0, 5)
  // Reverse them so that the slider displays from oldest (left) to newest (right).
  const sliderYears = filteredYearsDesc.slice().reverse()
  // For the slider, min index = 0, max = sliderYears.length - 1.
  // Default value: newest year = last element.
  const defaultSliderIndex = sliderYears.length - 1

  // Use state for the selected slider index.
  const [selectedSliderIndex, setSelectedSliderIndex] =
    useState(defaultSliderIndex)
  // The actual selected year (as string) is taken from the reversed slider array.
  const selectedYear = sliderYears[selectedSliderIndex]

  // Find the row for the selected year.
  const row = rawData.find(r => r.Jahr === selectedYear)

  // Build treemap data: one node per city.
  const treemapData = cityColumns.map(city => {
    const value = row ? parseValue(row[city as keyof PopulationData]) : 0
    return { name: city, value }
  })

  // Compute the overall total.
  const total = treemapData.reduce((sum, node) => sum + node.value, 0)
  const formattedTotal = formatNumber(total)

  // Define the ECharts option for the treemap.
  const option: EChartsOption = {
    tooltip: {
      formatter: (info: any) => {
        const value = info.value
        return `${info.name}: ${formatNumber(value)}`
      },
    },
    series: [
      {
        type: 'treemap',
        roam: false,
        nodeClick: false, // Disable click (no zoom/drilldown)
        breadcrumb: { show: false }, // Disable breadcrumb
        data: treemapData,
        label: {
          show: true,
          // Use a function to format the label so that numbers include the thousand separators.
          formatter: (params: any) => {
            return `${params.name}\n${formatNumber(params.value)}`
          },
          fontSize: 14,
        },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: 20,
      bottom: 20,
    },
  }

  // Build slider labels: simply the year strings.
  const sliderLabels = sliderYears.map(year => String(year))

  return (
    <div className="flex flex-col space-y-4">
      {/* Slider: oldest (left) to newest (right) */}
      <Slider
        defaultValue={[defaultSliderIndex]}
        labels={sliderLabels}
        max={sliderYears.length - 1}
        min={0}
        onValueChange={([value]) => setSelectedSliderIndex(value)}
        variant="buildings"
      />

      {/* Treemap Chart */}
      <div style={{ width: '100%', height: '600px' }}>
        <ReactECharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Show overall total above the chart */}
      <div className="text-center text-lg font-bold">
        Gesamt: <span className="text-buildings">{formattedTotal}</span>
      </div>
    </div>
  )
}
