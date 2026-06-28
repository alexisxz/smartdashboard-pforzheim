import { ReactECharts } from '@/components/Charts/ReactECharts'
import { Spinner } from '@/components/Elements/Spinner'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import {
  BarSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  SeriesOption,
} from 'echarts'
import { useCallback, useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import type { StadtradelnData } from './ChartContainer'
import { formatStadtradelnNumber, getCityLabel } from './utils'

const { theme } = resolveConfig(tailwindConfig)

const colors = {
  muenster: {
    // @ts-ignore
    color: theme?.colors?.mobility.DEFAULT || '#34c17b',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconGreen.svg').default.src
    }`,
  },
  other: {
    // @ts-ignore
    color: theme?.colors?.buildings.DEFAULT || '#6060d6',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconPurple.svg').default.src
    }`,
  },
}

type ChartProps = {
  compare: boolean
  data: StadtradelnData[]
  other?: StadtradelnData[]
}

export default function Chart({ data, other }: ChartProps) {
  const [series, setSeries] = useState<SeriesOption[]>()

  const device = useDevice()

  const getSeries = useCallback(
    (data: StadtradelnData[], color: string, symbol: string) => {
      const cityLabel = getCityLabel(data[0])

      const lineSeries: LineSeriesOption = {
        name: cityLabel,
        data: data.map(({ year, value }) => [year, value]),
        type: 'line',
        lineStyle: {
          opacity: 0,
        },
        symbol: 'none',
        itemStyle: {},
        smooth: 0.2,
      }

      const barSeries: BarSeriesOption = {
        name: cityLabel,
        data: data.map(({ year, value }) => [year, value]),
        type: 'bar',
        barWidth: 3,
        zlevel: 10,
        itemStyle: {
          color: color,
          borderRadius: [2, 2, 0, 0],
        },
        barGap: 2,
        xAxisIndex: 1,
        label: {
          formatter: () => 'X',
          position: 'top',
        },
      }

      const barIcons: PictorialBarSeriesOption = {
        name: cityLabel,
        data: data.map(({ year, value }) => [year, value]),
        type: 'pictorialBar',
        symbol: symbol,
        symbolSize: device === 'desktop' ? [61, 61] : [30, 30],
        symbolOffset: device === 'desktop' ? [0, -60] : [0, -30],
        symbolRotate: 15,
        barWidth: 3,
        barGap: 2,
        symbolPosition: 'end',
        xAxisIndex: 1,
        zlevel: 20,
      }

      return [lineSeries, barSeries, barIcons]
    },
    [],
  )

  const visibleData = other ? [...data, ...other] : data
  const maxVisibleValue = Math.max(...visibleData.map(({ value }) => value), 0)
  const yAxisMax =
    maxVisibleValue > 0 ? Math.ceil((maxVisibleValue * 1.15) / 50_000) * 50_000 : 0

  useEffect(() => {
    if (!data) {
      return
    }

    setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
  }, [data])

  useEffect(() => {
    if (!other) {
      setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
      return
    }

    setSeries([
      ...getSeries(data, colors.muenster.color, colors.muenster.symbol),
      ...getSeries(other, colors.other.color, colors.other.symbol),
    ])
  }, [other])

  if (!data) {
    return <Spinner />
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 h-full w-full">
        <ReactECharts
          option={{
            grid: {
              left: '20%',
              right: '10%',
              top: '20%',
              bottom: '10%',
            },
            tooltip: {
              trigger: 'axis',
              formatter: (params: any) => {
                const rows = Array.isArray(params) ? params : [params]
                const byCity = new Map<string, number>()

                rows.forEach((param: any) => {
                  if (
                    typeof param.seriesName === 'string' &&
                    typeof param.value?.[1] === 'number' &&
                    !byCity.has(param.seriesName)
                  ) {
                    byCity.set(param.seriesName, param.value[1])
                  }
                })

                const year = rows[0]?.axisValue ?? rows[0]?.value?.[0] ?? ''
                const cityRows = Array.from(byCity.entries())
                  .map(
                    ([city, value]) =>
                      `${city}: ${formatStadtradelnNumber(value)} km`,
                  )
                  .join('<br/>')

                return `Jahr: ${year}<br/>${cityRows}`
              },
            },
            xAxis: [
              {
                // hidden xaxis for lines
                type: 'category',
                axisTick: undefined,
                boundaryGap: false,
                position: 'bottom',
                show: false,
              },
              {
                // xaxis for bars
                type: 'category',
                axisTick: undefined,
                position: 'bottom',
                name: 'Jahr',
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
                },
              },
            ],
            yAxis: {
              type: 'value',
              max: yAxisMax,
              axisLabel: {
                fontSize: device === 'mobile' ? 12 : 20,
                formatter: (value: number) => formatStadtradelnNumber(value),
              },
            },
            series,
          }}
          settings={{
            notMerge: true,
          }}
        />
      </div>
    </div>
  )
}
