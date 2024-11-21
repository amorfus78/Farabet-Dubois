import doesUserExist from '../commands/doesUserExist.js'
import getMessagesWithUser from '../commands/getMessagesWithUser.js'
import { FAILED_TO_GET_MESSAGES, NO_USER_FOUND } from '../errors.js'

const getMessagesWithUserService = async (userId, contactId) => {
	const error = await doesUserExist(contactId)
	if (!error) {
		return [NO_USER_FOUND, null]
	}

	const [error_messages, messages] = await getMessagesWithUser(userId, contactId)
	if (error_messages) {
		return [FAILED_TO_GET_MESSAGES, null]
	}

	return [null, messages]
}

export default getMessagesWithUserService