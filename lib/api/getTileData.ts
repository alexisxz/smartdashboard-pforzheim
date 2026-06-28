import directus, { tileCollectionName } from '../directus'
import withTimeout from './withTimeout'

export default async function getTileData(id: string) {
  const response = await withTimeout(
    directus.items(tileCollectionName).readByQuery({
      filter: {
        tile_id: id,
      },
    })
  ).catch(() => undefined)

  return response?.data?.[0]
}
