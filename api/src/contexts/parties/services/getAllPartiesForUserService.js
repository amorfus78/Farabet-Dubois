

import { COULD_NOT_GET_PARTIES } from '../errors.js'
import getPartiesForUser from '../commands/getPartiesForUser.js'

const getAllPartiesForUserService = async (userId) => {
	const [error, parties] = await getPartiesForUser(userId)	
	if (error) {
		return [COULD_NOT_GET_PARTIES, null]
	}

	return [null, parties]
}

export default getAllPartiesForUserService