

import { COULD_NOT_GET_PARTIES, USER_DOES_NOT_EXIST } from '../errors.js'
import getPartiesForUser from '../commands/getPartiesForUser.js'
import doesUserExist from '../commands/doesUserExist.js'

const getAllPartiesForUserService = async (userId) => {
	const userExists = await doesUserExist(userId)
	if (!userExists) {
		return [USER_DOES_NOT_EXIST, null]
	}

	const [error, parties] = await getPartiesForUser(userId)	
	if (error) {
		return [COULD_NOT_GET_PARTIES, null]
	}

	return [null, parties]
}

export default getAllPartiesForUserService