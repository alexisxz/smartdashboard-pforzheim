import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  surveyCollectionName,
} from '../directus'
import withTimeout from './withTimeout'

export default async function getSurveysForCategory(category: string) {
  const response = await withTimeout(
    directus.items(surveyCollectionName).readByQuery({
      filter: {
        category,
        status: ENV_DIRECTUS_ITEM_STATUS,
      },
    })
  ).catch(() => undefined)

  return response?.data
}
