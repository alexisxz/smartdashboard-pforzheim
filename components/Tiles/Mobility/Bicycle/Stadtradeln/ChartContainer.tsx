'use client'

import Switch from '@/components/Inputs/Switch'
import { useEffect, useState } from 'react'
import Chart from './Chart'
import stadtradelnData from '@/assets/data/stadtradeln.json'
import { animated, useSpring } from 'react-spring'
import { ProgressCircle } from '@/components/Charts/Progress/ProgressCircle'
import AnimatedRollingElement from '@/components/Elements/Animated/AnimatedRollingElement'

type StadtradelnData = {
  name: string
  data: {
    year: number
    km: number
  }[]
}

const otherCities = Object.keys(stadtradelnData)
  .filter(k => k !== 'muenster')
  // @ts-ignore
  .map(k => stadtradelnData[k] as StadtradelnData)

const COMPARE_INTERVAL = 5000

const AnimatedProgressCircle = animated(ProgressCircle)

export default function ChartContainer() {
  const [compare, setCompare] = useState(false)
  const [otherData, setOtherData] = useState<StadtradelnData>()
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

    if (otherIndex >= otherCities.length) {
      setOtherIndex(0)
      return
    }

    setOtherData(otherCities[otherIndex])
  }, [otherIndex])

  return (
    <div className="rounded bg-white p-2">
      <div className="flex h-96 w-full items-center justify-center">
        <Chart
          compare={compare}
          data={stadtradelnData.muenster}
          other={otherData}
        />
      </div>
      <div className="flex items-center space-x-4 p-4">
        <div className="h-1 w-12 rounded bg-mobility" />
        <p className="text-primary">geradelte Kilometer in Münster</p>
      </div>
      <div className="flex w-full flex-col items-center justify-between rounded border border-dashed border-primary p-4 lg:flex-row lg:space-x-2">
        <Switch
          defaultChecked={compare}
          label="Städtevergleich"
          onCheckedChange={setCompare}
          variant={'mobility'}
        />
        {otherData && (
          <>
            <div className="relative h-6 w-full">
              <AnimatedRollingElement>
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-12 rounded bg-buildings" />
                  <p>{otherData.name}</p>
                </div>
              </AnimatedRollingElement>
            </div>
            <AnimatedProgressCircle {...springs} />
          </>
        )}
      </div>
    </div>
  )
}
