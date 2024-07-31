'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import Switch from '@/components/Inputs/Switch'
import { format, getYear, parse } from 'date-fns'
import { LineSeriesOption } from 'echarts'

// @ts-ignore
import WachstumData from '@/assets/data/wachstum.csv'
// @ts-ignore
import CO2EmissionenTonnenData from '@/assets/data/co2-emissionen-tonnen.csv'
import Title from '@/components/Elements/Title'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import { IndicesTypes } from '../ClimateIndices/ClimateIndicesChart'

const { theme } = resolveConfig(tailwindConfig)

type ValuesTypes = 'bip' | 'beschaeftigte' | 'co2Industrie' | 'co2Gewerbe'

type Wachstum = {
  ZEIT: number
  Bruttoinlandsprodukt: number
  'Sozialversicherungspflichtige Beschäftigte am Arbeitsort': number
}

type CO2Emissionen = {
  ZEIT: number
  'CO2-Emissionen - Gesamt': number
  'CO2-Emissionen - Gesamt (Zielwert)': number
  'CO2-Emissionen - Gewerbe + Sonstiges': number
  'CO2-Emissionen - Gewerbe + Sonstiges (Zielwert)': number
  'CO2-Emissionen - Industrie': number
  'CO2-Emissionen - Industrie (Zielwert)': number
  'CO2-Emissionen - Private Haushalt (Zielwert)': number
  'CO2-Emissionen - Private Haushalte': number
  'CO2-Emissionen - Verkehr': number
  'CO2-Emissionen - Verkehr (Zielwert)': number
}

const STARTING_YEAR = 1990

const getSeries = <T extends Wachstum | CO2Emissionen>(
  data: T[],
  property: keyof T,
  percentualGrowth: boolean = true,
) => {
  const arr = data
    .filter(e => e.ZEIT >= STARTING_YEAR)
    .map(e => [new Date(`${e.ZEIT}-01-01T00:00:00.000Z`), e[property]])
    .reduce((acc: Record<string, number>, [timestamp, value]) => {
      const year = getYear(timestamp as Date)

      acc[year] = (acc[year] ?? 0) + (value as number)

      return acc
    }, {})

  const entries = Object.entries(arr)
    .map(([year, value]) => [`${year}-01-01T00:00:00.000Z`, value])
    .filter(e => e[1] != 0)

  if (percentualGrowth) {
    const initialYearValue = entries[0][1] as number
    return entries.map(([year, value]) => [
      year,
      (((value as number) - initialYearValue) / initialYearValue) * 100,
    ])
  }

  return entries
}

/**
 * All the indices that are on the chart
 */
function getIndices(mode: 'percent' | 'absolute'): Record<
  ValuesTypes,
  {
    title: string
    seriesOption: LineSeriesOption
  }
> {
  return {
    bip: {
      title: 'BIP',
      seriesOption: {
        name: 'BIP',
        data: getSeries<Wachstum>(
          WachstumData,
          'Bruttoinlandsprodukt',
          mode === 'percent',
        ),
        // @ts-ignore
        color: theme?.colors?.buildings.DEFAULT || '#6060d6',
      },
    },
    beschaeftigte: {
      title: 'Beschäftigte am Arbeitsort',
      seriesOption: {
        name: 'Beschäftigte am Arbeitsort',
        data: getSeries<Wachstum>(
          WachstumData,
          'Sozialversicherungspflichtige Beschäftigte am Arbeitsort',
          mode === 'percent',
        ),
        // @ts-ignore
        color: theme?.colors?.climate.DEFAULT || '#6060d6',
      },
    },
    co2Industrie: {
      title: 'CO2 Industrie',
      seriesOption: {
        name: 'CO2 Industrie',
        data: getSeries<CO2Emissionen>(
          CO2EmissionenTonnenData,
          'CO2-Emissionen - Industrie',
          mode === 'percent',
        ),
        // @ts-ignore
        color: theme?.colors?.energy.DEFAULT || '#6060d6',
      },
    },
    co2Gewerbe: {
      title: 'CO2 Gewerbe + Sonstiges',
      seriesOption: {
        name: 'CO2 Gewerbe + Sonstiges',
        data: getSeries<CO2Emissionen>(
          CO2EmissionenTonnenData,
          'CO2-Emissionen - Gewerbe + Sonstiges',
          mode === 'percent',
        ),
        // @ts-ignore
        color: theme?.colors?.mobility.DEFAULT || '#6060d6',
      },
    },
  }
}

function Toggle({
  onChange,
}: {
  onChange: (_val: 'percent' | 'absolute') => void
}) {
  return (
    <ToggleGroup
      items={[
        {
          element: (
            <Title as="h5" className="2xl:w-max">
              Prozentuale Entwicklung
            </Title>
          ),
          value: 'percent',
        },
        {
          element: (
            <Title as="h5" className="2xl:w-max">
              Absolute Entwicklung
            </Title>
          ),
          value: 'absolute',
        },
      ]}
      // @ts-ignore
      onChange={onChange}
      variant={'climate'}
    />
  )
}

/**
 *
 * @param type: the type of the icon
 * @param onChange: on toggle change
 * @returns Toggle with Icon and text
 */
function ClimateIndiceToggle({
  type,
  defaultChecked,
  onChange,
  children,
  checked,
}: {
  type: IndicesTypes
  defaultChecked?: boolean
  onChange?: (_checked: boolean) => void
  children?: React.ReactNode
  checked?: boolean
}) {
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between gap-2 lg:flex-row lg:justify-normal lg:gap-4">
      <Switch
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onChange}
        variant={type}
      />
      <div className="flex items-center gap-2 md:w-max md:gap-4">
        <Title as="h5" variant={type}>
          {children}
        </Title>
      </div>
    </div>
  )
}

/**
 *
 * @returns The Climate Indices Chart
 */
export default function WachstumChart() {
  const device = useDevice()

  const [mode, setMode] = useState<'percent' | 'absolute'>('percent')

  const [seriesVisible, setSeriesVisible] = useState<
    Record<ValuesTypes, boolean>
  >({
    bip: true,
    beschaeftigte: true,
    co2Industrie: true,
    co2Gewerbe: true,
  })

  useEffect(() => {
    if (mode === 'percent') {
      setSeriesVisible({
        bip: true,
        beschaeftigte: true,
        co2Industrie: true,
        co2Gewerbe: true,
      })
    } else {
      setSeriesVisible({
        bip: true,
        beschaeftigte: false,
        co2Industrie: false,
        co2Gewerbe: false,
      })
    }
  }, [mode])

  const indices = getIndices(mode)

  const series: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as ValuesTypes])
    .map(e => ({
      ...indices[e as ValuesTypes].seriesOption,
      type: 'line',
      itemStyle: {
        opacity: 0,
      },
      data: indices[e as ValuesTypes].seriesOption.data,
    }))

  return (
    <div className="relative">
      <div className="absolute -left-10 -top-10 flex items-center justify-end px-5 2xl:justify-between">
        <Toggle onChange={setMode} />
      </div>
      <div className=" flex h-full w-full flex-col items-center gap-2 p-5 pt-8 2xl:flex-row">
        <div className="h-full w-full flex-1">
          <Title as="h7" font="semibold" variant={'primary'}>
            {mode === 'percent' ? (
              <span className={device === 'mobile' ? 'pl-2' : 'pl-24'}>%</span>
            ) : seriesVisible.bip ? (
              <span className={device === 'mobile' ? 'pl-2' : 'pl-24'}>€</span>
            ) : seriesVisible.beschaeftigte ? (
              <span>Beschäftigte</span>
            ) : (
              <span className={device === 'mobile' ? 'pl-2' : 'pl-24'}>t</span>
            )}
          </Title>
          <div className="h-[235px] w-full md:h-[440px]">
            <ReactECharts
              option={{
                grid: {
                  top: 20,
                  bottom: 40,
                  left:
                    device === 'mobile' ? (mode === 'absolute' ? 80 : 40) : 120,
                  right: 0,
                },
                series: [...series],
                xAxis: {
                  type: 'time',
                  axisLabel: {
                    fontSize: device === 'mobile' ? 12 : 20,
                    margin: 20,
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
                  confine: true,
                  showDelay: 0,
                  trigger: 'axis',
                  valueFormatter: (val: any) => {
                    return Intl.NumberFormat('de-DE').format(val.toFixed(2))
                  },
                  axisPointer: {
                    label: {
                      formatter: function (params) {
                        const oT = new Date(params.value)
                        return format(oT, 'yyyy')
                      },
                    },
                  },
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    fontSize: device === 'mobile' ? 12 : 20,
                    formatter: (val: any) => {
                      return Intl.NumberFormat('de-DE').format(val)
                    },
                    margin: 20,
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
        <div className="flex h-full flex-col justify-evenly gap-1 2xl:self-start 2xl:pl-4">
          <ClimateIndiceToggle
            checked={seriesVisible.bip}
            defaultChecked={seriesVisible.bip}
            onChange={c => {
              if (mode === 'percent') {
                setSeriesVisible({ ...seriesVisible, bip: c })
              } else {
                // @ts-ignore
                const allFalse: Record<ValuesTypes, boolean> = Object.keys(
                  seriesVisible,
                ).reduce((acc, e) => ({ ...acc, [e]: false }), {})

                setSeriesVisible({
                  ...allFalse,
                  bip: c,
                })
              }
            }}
            type="tropennaechte"
          >
            BIP (Münster)
          </ClimateIndiceToggle>
          <ClimateIndiceToggle
            checked={seriesVisible.beschaeftigte}
            defaultChecked={seriesVisible.beschaeftigte}
            onChange={c => {
              if (mode === 'percent') {
                setSeriesVisible({ ...seriesVisible, beschaeftigte: c })
              } else {
                // @ts-ignore
                const allFalse: Record<ValuesTypes, boolean> = Object.keys(
                  seriesVisible,
                ).reduce((acc, e) => ({ ...acc, [e]: false }), {})

                setSeriesVisible({
                  ...allFalse,
                  beschaeftigte: c,
                })
              }
            }}
            type="eistage"
          >
            Beschäftigte* am Arbeitsort
          </ClimateIndiceToggle>
          <ClimateIndiceToggle
            checked={seriesVisible.co2Industrie}
            defaultChecked={seriesVisible.co2Industrie}
            onChange={c => {
              if (mode === 'percent') {
                setSeriesVisible({ ...seriesVisible, co2Industrie: c })
              } else {
                // @ts-ignore
                const allFalse: Record<ValuesTypes, boolean> = Object.keys(
                  seriesVisible,
                ).reduce((acc, e) => ({ ...acc, [e]: false }), {})

                setSeriesVisible({
                  ...allFalse,
                  co2Industrie: c,
                })
              }
            }}
            type="heisse_tage"
          >
            CO<sub>2</sub> Industrie
          </ClimateIndiceToggle>
          <ClimateIndiceToggle
            checked={seriesVisible.co2Gewerbe}
            defaultChecked={seriesVisible.co2Gewerbe}
            onChange={c => {
              if (mode === 'percent') {
                setSeriesVisible({ ...seriesVisible, co2Gewerbe: c })
              } else {
                // @ts-ignore
                const allFalse: Record<ValuesTypes, boolean> = Object.keys(
                  seriesVisible,
                ).reduce((acc, e) => ({ ...acc, [e]: false }), {})

                setSeriesVisible({
                  ...allFalse,
                  co2Gewerbe: c,
                })
              }
            }}
            type="sommertage"
          >
            CO<sub>2</sub> Gewerbe + Sonstiges
          </ClimateIndiceToggle>
        </div>
      </div>
    </div>
  )
}
