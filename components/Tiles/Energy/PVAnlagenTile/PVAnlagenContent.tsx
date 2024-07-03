'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import { Spacer } from '@/components/Elements/Spacer'
import { MsKlimadashboardIconsEPvGebaeude } from '@/components/Icons/Energie'
import Slider from '@/components/Inputs/Slider'
import { useState } from 'react'
import { PVAnlagenDataType } from '.'

export default function PVAnlagenContent() {
  const allData = PVData as PVAnlagenDataType[]

  // find all data where data['Leistung aller Anlagen (Summe)'] and data['Anzahl aller PV-Anlagen'] is not null
  const filteredData = allData
    .filter(
      e =>
        e['Leistung aller Anlagen (Summe)'] !== null &&
        e['Anzahl aller PV-Anlagen'] !== null,
    )
    .sort((a, b) => a.ZEIT - b.ZEIT)

  const [yearIndex, setYearIndex] = useState(filteredData.length - 1)

  return (
    <div>
      <Title as={'h1'} className="min-w-fit text-energy" font={'normal'}>
        <AnimatedNumber>
          {filteredData[yearIndex]['Anzahl aller PV-Anlagen']}
        </AnimatedNumber>{' '}
        PV-Anlagen
      </Title>
      <Spacer />
      <div className="mb-4 flex flex-row gap-6">
        <span>
          <MsKlimadashboardIconsEPvGebaeude className="h-20 text-energy md:h-32" />
        </span>
        <div className="flex flex-grow flex-col justify-between">
          <Title as={'subtitle'}>
            sind im Moment auf Gebäuden der Stadtverwaltung installiert. Das
            entspricht einer Leistung von{' '}
            <span className="text-energy">
              <AnimatedNumber decimals={0}>
                {filteredData[yearIndex]['Leistung aller Anlagen (Summe)']}
              </AnimatedNumber>{' '}
              kWp.
            </span>{' '}
          </Title>
        </div>
      </div>
      <Spacer />
      <Slider
        defaultValue={[filteredData.at(-1)!.ZEIT]}
        firstValueMobile={filteredData.at(0)!.ZEIT}
        labels={filteredData.map(e => e.ZEIT.toString())}
        max={filteredData.length - 1}
        min={0}
        onValueChange={([e]) => {
          setYearIndex(e)
        }}
        variant={'energy'}
      />
    </div>
  )
}
