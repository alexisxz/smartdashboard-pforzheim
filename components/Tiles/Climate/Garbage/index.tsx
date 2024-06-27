import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import GarbageChart from './GarbageChart'

export default async function GarbageTile() {
  const data = await getTileData('climate-garbage')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Abfallwirtschaftsbetriebe Münster (awm)"
      embedId="climate-garbage"
      subtitle={
        'So viele Kilogramm Abfall wurden durchschnittlich durch die awm erfasst'
      }
      title={'Abfall pro Kopf'}
    >
      <TileSplitView>
        <TileSplitView.Left className="rounded bg-white p-5">
          <GarbageChart />
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
