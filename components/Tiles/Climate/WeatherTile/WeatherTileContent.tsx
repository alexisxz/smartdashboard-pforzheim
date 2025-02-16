'use client'

import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import useWeather from '@/hooks/useWeather'
import { conditionMapping, conditionMappingIcon } from '@/lib/brightsky'
import { addHours, format } from 'date-fns'
import { useState } from 'react'
import Phenomenon from './Phenomenon'

export default function WeatherTileContent() {
  const [timestamp, setTimestamp] = useState(new Date())

  const weather = useWeather({ lat: 48.9, lng: 8.74 }, timestamp)

  const nextHours = new Array(6).fill(undefined).map((e, i) => {
    const date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return addHours(date, i)
  })

  if (weather) {
    const Icon = conditionMappingIcon[weather?.condition]

    return (
      <div>
        {weather && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-1 items-center gap-6 md:gap-2">
              <Icon className="h-20 text-primary md:mr-12 md:h-36" />
              <Title as={'h4'} className="my-4 w-3/4 md:w-1/2">
                In Pforzheim ist es gerade{' '}
                <span className="text-climate">
                  {conditionMapping[weather?.condition]}
                </span>
              </Title>
            </div>
            <div className="flex flex-row items-start md:items-center">
              <div className="flex-1">
                <Phenomenon
                  phenomenon="temperature"
                  size="xl"
                  value={weather?.temperature}
                />
              </div>

              <div className="flex flex-1">
                <div className="flex h-full w-full flex-1 flex-col justify-between gap-2.5 md:gap-6">
                  <Phenomenon
                    phenomenon="precipitation"
                    value={weather?.precipitation}
                  />
                  <Phenomenon
                    phenomenon="cloudcover"
                    value={weather?.cloud_cover}
                  />
                  <Phenomenon
                    phenomenon="windspeed"
                    value={weather?.wind_speed}
                  />
                  {/* <Phenomenon phenomenon="sunhours" value={weather?.sunshine} /> */}
                </div>
              </div>
            </div>
          </div>
        )}
        <Slider
          defaultValue={[0]}
          labels={(() => {
            const labels = nextHours.map(d => format(d, 'kk:mm'))
            labels[0] = 'jetzt'
            return labels
          })()}
          max={nextHours.length - 1}
          min={0}
          onValueChange={([e]) => {
            setTimestamp(nextHours[e])
          }}
          variant={'climate'}
        />
        <Spacer size="xl" />
        {/* <LongTermAverageDiff /> */}
      </div>
    )
  }

  return <p>Loading...</p>
}
