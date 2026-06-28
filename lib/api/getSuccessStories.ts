import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  successStoriesCollectionName,
} from '../directus'
import withTimeout from './withTimeout'

export default async function getSuccessStoriesForCategory(category: string) {
  const response = await withTimeout(
    directus.items(successStoriesCollectionName).readByQuery({
      filter: {
        category,
        status: ENV_DIRECTUS_ITEM_STATUS,
      },
      limit: 3,
    })
  ).catch(() => undefined)

  return response?.data
}
