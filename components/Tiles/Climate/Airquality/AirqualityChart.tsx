'use client'

import Title from '@/components/Elements/Title'
import { useState } from 'react'
import Phenomenon from '../WeatherTile/Phenomenon'
import QualityBar from '@/components/Charts/QualityBar/QualityBar'
import useAirquality from '@/hooks/useAirquality'
import MsKlimadashboardIconsButtonAktivKlima from '@/components/Icons/Misc/MsKlimadashboardIconsButtonAktivKlima'

type QualityMappingType = {
  [_key in number]: string
}

const qualityMapping: QualityMappingType = {
  0: 'sehr gut',
  1: 'gut',
  2: 'mäßig',
  3: 'schlecht',
  4: 'sehr schlecht',
}

export default function AirqualityChart() {
  const [timestamp, setTimestamp] = useState(new Date())

  const { airqualityData, parameterData } = useAirquality(timestamp)

  if (airqualityData) {
    const Icon = MsKlimadashboardIconsButtonAktivKlima

    return (
      <div>
        {airqualityData && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-1 items-center gap-6 md:gap-2">
              <Icon className="h-20 text-primary md:mr-12 md:h-36" />
              <div className="my-4 grow">
                <Title as={'h4'}>
                  In Münster ist aktuell{' '}
                  <span className="text-climate">
                    {qualityMapping[airqualityData[1]]}
                  </span>
                </Title>
                <div className="pt-4">
                  <QualityBar
                    progress={(airqualityData[1] / 5) * 100}
                  ></QualityBar>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8">
              {parameterData && (
                <>
                  <Phenomenon
                    phenomenon="no2"
                    size="md"
                    value={parameterData[5] ?? 'NoData'}
                  />
                  <Phenomenon
                    phenomenon="pm10"
                    size="md"
                    value={parameterData[1] ?? 'NoData'}
                  />
                  <Phenomenon
                    phenomenon="o3"
                    size="md"
                    value={parameterData[3] ?? 'NoData'}
                  />
                  <Phenomenon
                    phenomenon="pm25"
                    size="md"
                    value={parameterData[9] ?? 'NoData'}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return <p>Loading...</p>
}
