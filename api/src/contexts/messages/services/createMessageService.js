import doesUserExist from '../commands/doesUserExist.js'
import createMessage from '../commands/createMessage.js'
import { FAILED_TO_CREATE_MESSAGE, NO_USER_FOUND } from '../errors.js'

const createMessageService = async (recipientId, senderId, message) => {
	let error = await doesUserExist(recipientId)
	if (!error) {
		return NO_USER_FOUND
	}

	error = await createMessage(recipientId, senderId, message)
	if (error) {
		return FAILED_TO_CREATE_MESSAGE
	}
}

export default createMessageService