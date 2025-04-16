// components/dwdchart.tsx
'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import Slider from '@/components/Inputs/Slider'
import type { EChartsOption } from 'echarts'
import { useState } from 'react'
//@ts-ignore
import dwdData from '@/assets/data/dwd.csv' // Ensure this path is correct

// Define the interface for the CSV data.
interface DWDData {
  Jahr: string
  Monat: string
  'Niederschlag Monatssumme': string | number
  'Tage Niederschlag': string | number
}

// Helper function to parse numbers from the CSV.
const parseNumber = (val: any): number => {
  if (val === null || val === undefined) {return 0}
  const str = typeof val === 'string' ? val : String(val)
  if (!str.trim() || str.trim() === '-') {return 0}
  const cleaned = str.replace(/"/g, '').replace(/,/g, '')
  return parseFloat(cleaned)
}

// Helper function to format numbers in German style (e.g., 4473 becomes "4.473").
const formatNumber = (num: number): string =>
  num.toLocaleString('de-DE', { minimumFractionDigits: 0 })

// Define the order of months (in German).
const monthOrder = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]

export default function DWDChart() {
  // Cast the CSV data to our interface.
  const rawData = dwdData as unknown as DWDData[]

  // Extract all distinct years from the CSV.
  // Sort descending (newest first).
  const allYears = Array.from(new Set(rawData.map(row => row.Jahr))).sort(
    (a, b) => Number(b) - Number(a),
  )
  // Select only the last 5 years (i.e., the 5 newest).
  const filteredYearsDesc = allYears.slice(0, 5)
  // Reverse them so the slider shows oldest on the left and newest on the right.
  const sliderYears = filteredYearsDesc.slice().reverse()
  // Default slider index: newest year is at the far right.
  const defaultSliderIndex = sliderYears.length - 1

  // State for the selected slider index.
  const [selectedYearIndex, setSelectedYearIndex] = useState(defaultSliderIndex)
  const selectedYear = sliderYears[selectedYearIndex]

  // Filter the rawData to only include rows for the selected year.
  const dataForYear = rawData.filter(row => row.Jahr === selectedYear)
  // Sort the filtered rows by the defined month order.
  const sortedDataForYear = dataForYear.sort(
    (a, b) => monthOrder.indexOf(a.Monat) - monthOrder.indexOf(b.Monat),
  )

  // Extract the x-axis labels (the month names) and data arrays.
  const months = sortedDataForYear.map(row => row.Monat)
  const precipitation = sortedDataForYear.map(row =>
    parseNumber(row['Niederschlag Monatssumme']),
  )
  const rainyDays = sortedDataForYear.map(row =>
    parseNumber(row['Tage Niederschlag']),
  )

  // Define the ECharts option with dual y-axes.
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        // Expect params to be an array with series info.
        const precip = params.find(
          (p: any) => p.seriesName === 'Niederschlag Monatssumme',
        )
        const days = params.find(
          (p: any) => p.seriesName === 'Tage Niederschlag',
        )
        let tooltipText = `${params[0].axisValue}<br/>`
        if (precip) {
          tooltipText += `Niederschlag: ${formatNumber(precip.data)} mm<br/>`
        }
        if (days) {
          tooltipText += `Tage Niederschlag: ${formatNumber(days.data)}`
        }
        return tooltipText
      },
    },
    legend: {
      data: ['Niederschlag Monatssumme', 'Tage Niederschlag'],
      bottom: 10,
    },
    xAxis: {
      type: 'category',
      data: months,
    },
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => formatNumber(value),
        },
      },
      {
        type: 'value',
        position: 'right',
        axisLabel: {
          formatter: (value: number) => formatNumber(value),
        },
      },
    ],
    series: [
      {
        name: 'Niederschlag Monatssumme',
        type: 'line',
        data: precipitation,
        yAxisIndex: 0,
        smooth: true,
        lineStyle: { width: 2 },
        itemStyle: { color: '#5470C6' },
      },
      {
        name: 'Tage Niederschlag',
        type: 'bar',
        data: rainyDays,
        yAxisIndex: 1,
        barWidth: 20,
        itemStyle: { color: '#91CC75' },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: 80,
      bottom: 80,
    },
    // Media query for responsive behavior: hide axis labels on mobile.
    media: [
      {
        query: { maxWidth: 768 },
        option: {
          xAxis: { axisLabel: { show: false } },
          yAxis: [
            { axisLabel: { show: false } },
            { axisLabel: { show: false } },
          ],
        },
      },
    ],
  }

  // Prepare slider labels (just the year strings).
  const sliderLabels = sliderYears.map(year => String(year))

  return (
    <div className="flex flex-col space-y-6">
      {/* Slider: shows the last 5 years from oldest (left) to newest (right) */}
      <Slider
        defaultValue={[defaultSliderIndex]}
        labels={sliderLabels}
        max={sliderYears.length - 1}
        min={0}
        onValueChange={([value]) => setSelectedYearIndex(value)}
        variant="climate"
      />
      <div style={{ width: '100%', height: '600px' }}>
        <ReactECharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
