import { COULD_NOT_GET_HOBBIES } from '../errors.js'
import getHobbies from '../commands/getHobbies.js'

const getHobbiesService = async () => {
	const [error, hobbies] = await getHobbies()

	if (error) {
		return [COULD_NOT_GET_HOBBIES, null]
	}

	return [null, hobbies]
}

export default getHobbiesService
