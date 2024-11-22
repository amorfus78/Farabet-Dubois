import { COULD_NOT_GET_HOBBIES } from '../errors.js'
import getHobbiesByName from '../commands/gethobbiesByname.js'

const getHobbiesByNameService = async (name) => {
	const [error, hobbies] = await getHobbiesByName(name)
	if (error) {
		return [COULD_NOT_GET_HOBBIES, null]
	}

	return [null, hobbies]
}

export default getHobbiesByNameService
