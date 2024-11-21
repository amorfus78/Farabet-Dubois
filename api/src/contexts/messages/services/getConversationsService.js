import { FAILED_TO_GET_CONVERSATIONS } from '../errors.js'
import getConversations from '../commands/getConversations.js'

const getConversationsService = async (userId) => {
	const [error, conversations] = await getConversations(userId)
	if (error) {
		return [FAILED_TO_GET_CONVERSATIONS, null]
	}

	return [null, conversations]
}

export default getConversationsService	