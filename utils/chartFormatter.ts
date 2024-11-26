export const chartFormatter = (params: any) => {
  console.log(params)
  return params
    .map((param: any, index: number) => {
      const marker = param.marker
      const seriesName = param.seriesName
      const value = Math.floor(param.value[1])

      if (index === 0) {
        const year = new Date(param.value[0]).getFullYear()
        return `<b>${year}</b><br/>${marker}${seriesName}: ${value}`
      }
      return `${marker}${seriesName}: ${value}`
    })
    .join('<br/>')
}
