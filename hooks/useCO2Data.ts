// @ts-ignore
import CO2Data from '@/assets/data/co2-emissionen-tonnen.csv'
// @ts-ignore
import Endenergieverbrauch from '@/assets/data/endenergie.csv'

// ZEIT,Endenergieverbrauch nach Sektoren - Gesamt,Endenergieverbrauch nach Sektoren - Gesamt (Zielwert),Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges,Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges (Zielwert),Endenergieverbrauch nach Sektoren - Industrie,Endenergieverbrauch nach Sektoren - Industrie (Zielwert),Endenergieverbrauch nach Sektoren - Private Haushalte,Endenergieverbrauch nach Sektoren - Private Haushalte (Zielwert),Endenergieverbrauch nach Sektoren - Verkehr,Endenergieverbrauch nach Sektoren - Verkehr (Zielwert)

type InputDataType = {
  ZEIT: number
  'Endenergieverbrauch nach Sektoren - Gesamt': number
  'Endenergieverbrauch nach Sektoren - Gesamt (Zielwert)': number
  'Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges': number
  'Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges (Zielwert)': number
  'Endenergieverbrauch nach Sektoren - Industrie': number
  'Endenergieverbrauch nach Sektoren - Industrie (Zielwert)': number
  'Endenergieverbrauch nach Sektoren - Private Haushalte': number
  'Endenergieverbrauch nach Sektoren - Private Haushalte (Zielwert)': number
  'Endenergieverbrauch nach Sektoren - Verkehr': number
  'Endenergieverbrauch nach Sektoren - Verkehr (Zielwert)': number
}

type CO2Data = {
  ZEIT: number
  'CO2-Emissionen - Gesamt': number
  'CO2-Emissionen - Gesamt (Zielwert)': number
  'CO2-Emissionen - Gewerbe + Sonstiges': number
  'CO2-Emissionen - Gewerbe + Sonstiges (Zielwert)': number
  'CO2-Emissionen - Industrie': number
  'CO2-Emissionen - Industrie (Zielwert)': number
  'CO2-Emissionen - Private Haushalte (Zielwert)': number
  'CO2-Emissionen - Private Haushalte': number
  'CO2-Emissionen - Verkehr': number
  'CO2-Emissionen - Verkehr (Zielwert)': number
}

export default function useCO2Data(series: 'endenergie' | 'co2'): CO2Data[] {
  if (series === 'endenergie') {
    return Endenergieverbrauch.map((d: InputDataType) => ({
      ZEIT: d.ZEIT,
      'CO2-Emissionen - Gesamt':
        d['Endenergieverbrauch nach Sektoren - Gesamt'],
      'CO2-Emissionen - Gewerbe + Sonstiges':
        d['Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges'],
      'CO2-Emissionen - Industrie':
        d['Endenergieverbrauch nach Sektoren - Industrie'],
      'CO2-Emissionen - Private Haushalte':
        d['Endenergieverbrauch nach Sektoren - Private Haushalte'],
      'CO2-Emissionen - Verkehr':
        d['Endenergieverbrauch nach Sektoren - Verkehr'],
      'CO2-Emissionen - Verkehr (Zielwert)':
        d['Endenergieverbrauch nach Sektoren - Verkehr (Zielwert)'],
      'CO2-Emissionen - Gesamt (Zielwert)':
        d['Endenergieverbrauch nach Sektoren - Gesamt (Zielwert)'],
      'CO2-Emissionen - Gewerbe + Sonstiges (Zielwert)':
        d['Endenergieverbrauch nach Sektoren - Gewerbe + Sonstiges (Zielwert)'],
      'CO2-Emissionen - Industrie (Zielwert)':
        d['Endenergieverbrauch nach Sektoren - Industrie (Zielwert)'],
      'CO2-Emissionen - Private Haushalte (Zielwert)':
        d['Endenergieverbrauch nach Sektoren - Private Haushalte (Zielwert)'],
    }))
  }
  return CO2Data
}
