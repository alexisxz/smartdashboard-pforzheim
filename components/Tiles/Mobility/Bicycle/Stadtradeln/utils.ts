import populationByCity from '@/assets/data/stadtradeln_population.json'

type CityLabelInput = {
  key: string
  name: string
}

const populationLookup = populationByCity as Record<string, number | undefined>

export const formatStadtradelnNumber = (value: number): string =>
  value.toLocaleString('de-DE', { maximumFractionDigits: 0 })

export const formatPopulation = (population?: number): string => {
  if (!population || !Number.isFinite(population)) {
    return ''
  }

  return `${formatStadtradelnNumber(population)} EW`
}

export const getCityLabel = ({ key, name }: CityLabelInput): string => {
  const formattedPopulation = formatPopulation(populationLookup[key])

  return formattedPopulation ? `${name} (${formattedPopulation})` : name
}
