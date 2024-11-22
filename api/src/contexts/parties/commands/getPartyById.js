import PartyModel from '../../../../db/models/PartyModel.js'

const getPartyById = async (id) => {
	try {
		const party = await PartyModel.query().findById(id)
		return [null, party]
	} catch (error) {
		return [error, null]
	}
}

export default getPartyById
