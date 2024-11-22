import searchParties from '../commands/searchParties.js'

const searchPartiesService = async (city, type, offset = 0, limit = 5) => {
	const [error, parties] = await searchParties(city, type, offset, limit)
	return [error, parties]
}

export default searchPartiesService
