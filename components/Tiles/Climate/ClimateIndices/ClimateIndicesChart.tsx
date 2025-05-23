'use client'

import climateIndicesData from '@/assets/data/climate_indices.json'
import { ReactECharts } from '@/components/Charts/ReactECharts'
import Switch from '@/components/Inputs/Switch'
import { getYear, parse } from 'date-fns'
import { LineSeriesOption } from 'echarts'

import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsKlimakenntageEis,
  MsKlimadashboardIconsKlimakenntageFrost,
  MsKlimadashboardIconsKlimakenntageHeiss,
  MsKlimadashboardIconsKlimakenntageSommer,
  MsKlimadashboardIconsKlimakenntageTropennacht,
} from '@/components/Icons/Klima'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import { chartFormatter } from '@/utils/chartFormatter'
import { ForwardRefExoticComponent, SVGProps, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

const { theme } = resolveConfig(tailwindConfig)

export type IndicesTypes =
  | 'eistage'
  | 'frosttage'
  | 'heisse_tage'
  | 'sommertage'
  | 'tropennaechte'

type ClimateIndex = {
  dwd_station_id: number
  eistage: number
  frosttage: number
  heisse_tage: number
  observation_type: string
  sommertage: number
  timestamp: string
  tropennaechte: number
}

const STARTING_YEAR = 1990

const data = climateIndicesData as ClimateIndex[]
const getSeries = (property: keyof ClimateIndex) => {
  const arr = data
    .filter(e => new Date(e.timestamp).getFullYear() >= STARTING_YEAR)
    .map(e => [
      parse(e.timestamp, 'yyyy-MM-dd HH:mm:ssXXX', new Date()),
      e[property],
    ])
    .reduce((acc: Record<string, number>, [timestamp, value]) => {
      const year = getYear(timestamp as Date)

      acc[year] = (acc[year] ?? 0) + (value as number)

      return acc
    }, {})

  return Object.entries(arr).map(([year, value]) => [
    `${year}-01-01T00:00:00.000Z`,
    value,
  ])
}

/**
 * All the indices that are on the chart
 */
const indices: Record<
  IndicesTypes,
  {
    title: string
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
    seriesOption: LineSeriesOption
  }
> = {
  heisse_tage: {
    title: 'Heiße Tage (>= 30°C)',
    icon: MsKlimadashboardIconsKlimakenntageHeiss,
    seriesOption: {
      name: 'Heiße Tage',
      data: getSeries('heisse_tage'),
      // @ts-ignore
      color: theme?.colors?.energy.DEFAULT || '#6060d6',
    },
  },
  sommertage: {
    title: 'Sommertage (>= 25°C)',
    icon: MsKlimadashboardIconsKlimakenntageSommer,
    seriesOption: {
      name: 'Sommertage',
      data: getSeries('sommertage'),
      // @ts-ignore
      color: theme?.colors?.mobility.DEFAULT || '#6060d6',
    },
  },
  tropennaechte: {
    title: 'Tropennächte (>= 20°C)',
    icon: MsKlimadashboardIconsKlimakenntageTropennacht,
    seriesOption: {
      name: 'Tropennächte',
      data: getSeries('tropennaechte'),
      // @ts-ignore
      color: theme?.colors?.buildings.DEFAULT || '#6060d6',
    },
  },
  frosttage: {
    title: 'Frosttage (Min. < 0°C)',
    seriesOption: {
      name: 'Frosttage',
      data: getSeries('frosttage'),
      // @ts-ignore
      color: theme?.colors?.primary.DEFAULT || '#6060d6',
    },
    icon: MsKlimadashboardIconsKlimakenntageFrost,
  },
  eistage: {
    title: 'Eistage (Max. < 0°C)',
    icon: MsKlimadashboardIconsKlimakenntageEis,
    seriesOption: {
      name: 'Eistage',
      data: getSeries('eistage'),
      // @ts-ignore
      color: theme?.colors?.climate.DEFAULT || '#6060d6',
    },
  },
}

/**
 *
 * @param type: the type of the icon
 * @param onChange: on toggle change
 * @returns Toggle with Icon and text
 */
function ClimateIndiceToggle({
  type,
  checked,
  onChange,
}: {
  type: IndicesTypes
  checked?: boolean
  onChange?: (_checked: boolean) => void
}) {
  const Icon = indices[type].icon
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between gap-2 lg:flex-row lg:justify-normal lg:gap-4">
      <Switch
        // defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onChange}
        variant={type}
      />
      <div className="flex items-center gap-2 md:w-max md:gap-4">
        <Icon className="aspect-square h-5 md:h-8" />
        <Title as="h5" variant={type}>
          {indices[type].title}
        </Title>
      </div>
    </div>
  )
}

//Sample function to calculate trendline points
const calculateTrendline = (data: [string, number][]): [number, number][] => {
  // Calculate the trendline using linear regression
  const n = data.length
  const sumX = data.reduce((acc, [date]) => acc + new Date(date).getTime(), 0)
  const sumY = data.reduce((acc, [, value]) => acc + value, 0)
  const sumXY = data.reduce(
    (acc, [date, value]) => acc + new Date(date).getTime() * value,
    0,
  )
  const sumX2 = data.reduce(
    (acc, [date]) => acc + Math.pow(new Date(date).getTime(), 2),
    0,
  )

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2))
  const intercept = (sumY - slope * sumX) / n

  return data.map(([date]) => {
    const x = new Date(date).getTime()
    const y = slope * x + intercept
    return [x, y]
  })
}

// Function to count active toggles
const countActiveToggles = (toggles: Record<IndicesTypes, boolean>): number => {
  return Object.values(toggles).filter(isActive => isActive).length
}

/**
 *
 * @returns The Climate Indices Chart
 */
export default function ClimateIndicesChart() {
  const device = useDevice()

  const [seriesVisible, setSeriesVisible] = useState<
    Record<IndicesTypes, boolean>
  >({
    eistage: false,
    frosttage: false,
    heisse_tage: true,
    sommertage: false,
    tropennaechte: false,
  })

  const series: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      type: 'line',
      itemStyle: {
        opacity: 0,
      },
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) => getYear(new Date(date)) !== new Date().getFullYear(),
      ),
    }))

  const lastToCurYearSeries: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      name: `${indices[e as IndicesTypes].seriesOption.name}`,
      type: 'line',
      itemStyle: {
        opacity: 0,
      },
      lineStyle: {
        ...indices[e as IndicesTypes].seriesOption.lineStyle,
        type: 'dashed',
      },
      tooltip: {
        show: false,
      },
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) =>
          getYear(new Date(date)) >= new Date().getFullYear() - 1,
      ),
    }))

  // this is only added to fix the double tooltip bug
  const onlyCurYearSeries: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      name: `${indices[e as IndicesTypes].seriesOption.name}`,
      type: 'line',
      itemStyle: {
        opacity: 0,
      },
      lineStyle: {
        ...indices[e as IndicesTypes].seriesOption.lineStyle,
        type: 'dashed',
      },
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) => getYear(new Date(date)) == new Date().getFullYear(),
      ),
    }))

  const isAllChecked: boolean =
    seriesVisible.sommertage || seriesVisible.frosttage

  const allData = [...series].flatMap(s => s.data)

  const trendlineData = calculateTrendline(allData as [string, number][])
  const trendlineColor =
    series.length > 0 ? series[0].lineStyle?.color || 'black' : 'black'

  const activeToggleCount = countActiveToggles(seriesVisible)
  const trendlineSeries: LineSeriesOption | null =
    activeToggleCount === 1
      ? {
          type: 'line',
          data: trendlineData,
          name: 'Durchschnitt',
          smooth: true,
          lineStyle: {
            type: 'dotted', // Change to solid line
            color: trendlineColor, // Use the series color
            opacity: 0.3,
          },
          symbol: 'none', // Hide small circles on the trendline initially
          emphasis: {
            lineStyle: {
              opacity: 1, // Change color on hover
            },
          },
          markLine: {},
        }
      : null

  return (
    <div className="flex h-full w-full flex-col items-center p-5 2xl:flex-row">
      <div className="h-full w-full flex-1">
        <Title as="h7" font="semibold" variant={'primary'}>
          Anzahl <br />
          der Tage
        </Title>
        <div className="h-[235px] w-full md:h-[440px]">
          <ReactECharts
            option={{
              grid: {
                top: 20,
                bottom: 40,
                left: 40,
                right: 40,
              },
              series: [
                ...series,
                ...lastToCurYearSeries,
                ...onlyCurYearSeries,
                ...(trendlineSeries ? [trendlineSeries] : []),
              ],
              xAxis: {
                type: 'time',
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
                },
                min: parse(
                  `${STARTING_YEAR}-01-01`,
                  'yyyy-MM-dd',
                  new Date(),
                ).getTime(),
                max: parse(
                  `${new Date().getFullYear()}-01-01`,
                  'yyyy-MM-dd',
                  new Date(),
                ).getTime(),
              },
              tooltip: {
                show: true,
                showDelay: 0,
                trigger: 'axis',
                // formatter: (params: any) => {
                //   console.log(params)

                //   return '{b0}: {c0}<br />{b1}: {c1}'
                // },
                // return from x-axis only year
                formatter: chartFormatter,
              },
              yAxis: {
                type: 'value',
                interval: isAllChecked ? 10 : 5,
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
                  formatter: (val: any) => {
                    if (val === 0) {
                      return ''
                    }
                    return val
                  },
                },
              },
              animation: true,
            }}
            settings={{
              notMerge: true,
            }}
          />
        </div>
      </div>
      <div className="flex h-full flex-col justify-evenly gap-1">
        <ClimateIndiceToggle
          checked={seriesVisible.heisse_tage}
          onChange={c => setSeriesVisible({ ...seriesVisible, heisse_tage: c })}
          type="heisse_tage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.sommertage}
          onChange={c => setSeriesVisible({ ...seriesVisible, sommertage: c })}
          type="sommertage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.tropennaechte}
          onChange={c =>
            setSeriesVisible({ ...seriesVisible, tropennaechte: c })
          }
          type="tropennaechte"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.frosttage}
          onChange={c => setSeriesVisible({ ...seriesVisible, frosttage: c })}
          type="frosttage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.eistage}
          onChange={c => setSeriesVisible({ ...seriesVisible, eistage: c })}
          type="eistage"
        />
      </div>
    </div>
  )
}
