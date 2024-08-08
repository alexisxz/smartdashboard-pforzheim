import getAirquality from '@/lib/umweltbundesamt_airquality'
import { useEffect, useState } from 'react'

export default function useAirquality(timestamp: Date) {
  const [airqualityData, setAirqualityData] = useState<any>([])
  const [parameterData, setParameterData] = useState<any>({})

  useEffect(() => {
    async function getData() {
      const airquality = await getAirquality(timestamp)
      timestamp.setMinutes(0)
      timestamp.setSeconds(0)
      timestamp.setHours(timestamp.getHours() - 1)
      const parsedResults: any = {}
      const newData: any =
        airquality.data['1140'][
          timestamp.toISOString().replace('T', ' ').substr(0, 19)
        ]
      Object.values(newData).forEach((a: any) => {
        if (a[0] === 1 || a[0] === 3 || a[0] === 5 || a[0] === 9) {
          parsedResults[a[0]] = a[1]
        }
      })
      setParameterData(parsedResults)
      setAirqualityData(newData)
    }
    getData()
  }, [timestamp])

  return { airqualityData, parameterData }
}
