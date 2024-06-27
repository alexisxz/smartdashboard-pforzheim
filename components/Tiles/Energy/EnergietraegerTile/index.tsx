import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import EnergyTile from '../EnergyTile'
import EnergietraegerChart from './EnergietraegerChart'

export default async function EnergietraegerTile() {
  const data = await getTileData('energy-energietraeger')
  const infoText = data?.info ?? ''

  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster &ndash; Stabsstelle Klima"
      embedId="energy-energietraeger"
      subtitle={'Anteile verschiedener Energieträger'}
      title={'Stromerzeugung'}
    >
      <div className="h-[350px] md:h-[600px]">
        <EnergietraegerChart />
      </div>
      <Spacer />
      <Title as="h5" variant={'dark'}>
        {infoText}
      </Title>
    </EnergyTile>
  )
}
