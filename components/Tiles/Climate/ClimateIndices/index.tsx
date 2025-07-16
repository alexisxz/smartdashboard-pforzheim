import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import ClimateIndicesChart from './ClimateIndicesChart'

export default async function ClimateIndicesTile() {
  const data = await getTileData('climate-indices')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Deutscher Wetterdienst"
      embedId="climate-indices"
      live
      subtitle={'Häufigkeit von Temperaturkenntagen'}
      title="Klimakenntage"
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div className="rounded bg-white">
            <ClimateIndicesChart />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
}
