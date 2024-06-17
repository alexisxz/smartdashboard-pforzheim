'use client'

// @ts-ignore
import stadtradelnData from '@/assets/data/stadtradeln_data.csv'
import { ProgressCircle } from '@/components/Charts/Progress/ProgressCircle'
import AnimatedRollingElement from '@/components/Elements/Animated/AnimatedRollingElement'
import Title from '@/components/Elements/Title'
import Switch from '@/components/Inputs/Switch'
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'
import Chart from './Chart'

export type StadtradelnData = {
  key: string
  name: string
  year: number
  value: number
}

const muensterData = (stadtradelnData as StadtradelnData[]).filter(
  ({ key }) => key === 'muenster',
)

const otherCities = (stadtradelnData as StadtradelnData[]).filter(
  ({ key }) => key !== 'muenster',
)

const otherCitiesSet = Array.from(new Set(otherCities.map(({ key }) => key)))

const COMPARE_INTERVAL = 5000

const AnimatedProgressCircle = animated(ProgressCircle)

export default function ChartContainer() {
  const [compare, setCompare] = useState(false)
  const [otherData, setOtherData] = useState<StadtradelnData[]>()
  const [otherIndex, setOtherIndex] = useState(0)

  const [springs, api] = useSpring(() => ({
    from: { progress: 0 },
    to: { progress: 100 },
    config: {
      duration: COMPARE_INTERVAL,
    },
  }))

  useEffect(() => {
    if (!compare) {
      setOtherData(undefined)
      return
    }

    const restartProgress = () => {
      setOtherIndex(prevIndex => prevIndex + 1)
      api.stop()
      api.set({ progress: 0 })
      api.start({
        progress: 100,
        config: {
          duration: COMPARE_INTERVAL,
        },
      })
    }

    restartProgress()
    const timer = setInterval(restartProgress, COMPARE_INTERVAL)

    return () => clearInterval(timer)
  }, [compare])

  useEffect(() => {
    if (!compare) {
      setOtherData(undefined)
      return
    }

    if (otherIndex >= otherCitiesSet.length) {
      setOtherIndex(0)
      return
    }

    setOtherData(
      otherCities.filter(({ key }) => key === otherCitiesSet[otherIndex]),
    )
  }, [otherIndex])

  return (
    <div className="rounded bg-white p-2">
      <div className="flex h-[350px] w-full items-center justify-center md:h-[500px]">
        <Chart compare={compare} data={muensterData} other={otherData} />
      </div>
      <div className="flex items-center gap-2 p-4 md:gap-10 md:pl-8">
        <div className="h-1 w-8 rounded bg-mobility md:w-[52px]" />
        <Title as={'h5'} variant={'primary'}>
          geradelte Kilometer in Münster
        </Title>
      </div>
      <div className="flex w-full flex-col justify-between gap-2 rounded border border-dashed border-primary p-2 md:flex-row md:items-center md:space-x-4 md:p-4 md:pl-8">
        <div className="flex flex-shrink-0 items-center gap-2 md:gap-10">
          <Switch
            defaultChecked={compare}
            onCheckedChange={setCompare}
            variant={'mobility'}
          />
          <Title as={'h5'} variant={'primary'}>
            Städtevergleich
          </Title>
        </div>
        {otherData && (
          <div className="flex flex-1 items-center">
            <div className="relative h-6 flex-1">
              <AnimatedRollingElement>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="h-1 w-9 rounded bg-buildings md:w-[52px]" />
                  <Title as="h5" variant={'primary'}>
                    {
                      otherData.find(e => e.key === otherCitiesSet[otherIndex])
                        ?.name
                    }
                  </Title>
                </div>
              </AnimatedRollingElement>
            </div>

            <AnimatedProgressCircle {...springs} />
          </div>
        )}
      </div>
    </div>
  )
}
