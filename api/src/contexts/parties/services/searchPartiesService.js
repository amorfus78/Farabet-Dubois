import searchParties from '../commands/searchParties.js'

const searchPartiesService = async (city, type) => {
	const [error, parties] = await searchParties(city, type)
	return [error, parties]
}

export default searchPartiesService