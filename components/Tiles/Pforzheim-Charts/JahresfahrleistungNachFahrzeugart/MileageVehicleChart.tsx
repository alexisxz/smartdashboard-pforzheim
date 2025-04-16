'use client'

import { useState } from 'react'
//@ts-ignore
import mileageData from '@/assets/data/jahresfahrleistung-nach-fahrzeugart.csv'
// Adjust the import path to match your own slider component
import Slider from '@/components/Inputs/Slider'
import Image from 'next/image'

// Icons for each vehicle type
const motorcycleIcon = require('@/assets/icons/Motorcycle.svg').default.src
const carIcon = require('@/assets/icons/Car.svg').default.src
const vanIcon = require('@/assets/icons/Van.svg').default.src
const truckIcon = require('@/assets/icons/Truck.svg').default.src

// Define a TypeScript interface matching your CSV
interface MileageData {
  Jahr: string
  'Jahres-Fahrleistung Krafträder (in Mill. km)': string | number
  'Jahres-Fahrleistung Pkw (in Mill. km)': string | number
  'Jahres-Fahrleistung leichte Nutzfahrzeuge (in Mill. km)': string | number
  'Jahres-Fahrleistung schwere Nutzfahrzeuge (in Mill. km)': string | number
}

// Helper function to parse mileage from the CSV
function parseMileage(val: any): number {
  if (val == null) {
    return 0
  }
  const valStr = typeof val === 'string' ? val : String(val)
  if (!valStr.trim() || valStr.trim() === '-') {
    return 0
  }
  const cleaned = valStr.replace(/"/g, '').replace(/,/g, '')
  return parseFloat(cleaned)
}

// Define the four vehicle categories you want to display
const vehicleTypes = [
  {
    name: 'Krafträder',
    csvColumn: 'Jahres-Fahrleistung Krafträder (in Mill. km)',
    icon: motorcycleIcon,
  },
  {
    name: 'Pkw',
    csvColumn: 'Jahres-Fahrleistung Pkw (in Mill. km)',
    icon: carIcon,
  },
  {
    name: 'Leichte Nutzfahrzeuge',
    csvColumn: 'Jahres-Fahrleistung leichte Nutzfahrzeuge (in Mill. km)',
    icon: vanIcon,
  },
  {
    name: 'Schwere Nutzfahrzeuge',
    csvColumn: 'Jahres-Fahrleistung schwere Nutzfahrzeuge (in Mill. km)',
    icon: truckIcon,
  },
]

export default function MileageVehicleChart() {
  // 1. Cast the CSV data to our interface
  const rawData = mileageData as unknown as MileageData[]

  // 2. Extract all years, sort ascending, and take only the last 5
  const allYears = Array.from(new Set(rawData.map(row => row.Jahr))).sort()
  const filteredYears = allYears.slice(-5)

  // 3. Keep track of the selected year index in the last 5
  //    Default to the newest year (last index)
  const [selectedYearIndex, setSelectedYearIndex] = useState(
    filteredYears.length - 1,
  )

  // 4. Based on the selected index, figure out the actual year string
  const selectedYear = filteredYears[selectedYearIndex]
  // Find the row in the CSV that corresponds to that year
  const dataRow = rawData.find(row => row.Jahr === selectedYear)

  // 5. Prepare a small tile for each vehicle type
  const tiles = vehicleTypes.map(vt => {
    const mileage = dataRow
      ? parseMileage(dataRow[vt.csvColumn as keyof MileageData])
      : 0
    return (
      <div className="flex flex-col items-center justify-center" key={vt.name}>
        <div className="text-mobility">
          <Image
            alt={vt.name}
            className="mb-2 h-12 w-12 object-contain text-mobility"
            height={48}
            src={vt.icon}
            width={48}
          />
        </div>

        <p className="text-base font-semibold opacity-25">{vt.name}</p>
        <p className="text-sm text-mobility">{mileage} Mio km</p>
      </div>
    )
  })

  // 6. Slider label generation (for the last 5 years). No "jetzt" label here.
  const sliderLabels = filteredYears.map(year => String(year))

  return (
    <div className="space-y-4">
      {/* Slider */}
      <Slider
        defaultValue={[filteredYears.length - 1]}
        labels={sliderLabels}
        max={filteredYears.length - 1}
        min={0}
        onValueChange={([value]) => setSelectedYearIndex(value)}
        variant="mobility"
      />

      {/* Tiles layout: 2 columns on mobile, 4 columns on larger screens */}
      <div className="grid grid-cols-2 gap-4 text-center">{tiles}</div>
    </div>
  )
}
