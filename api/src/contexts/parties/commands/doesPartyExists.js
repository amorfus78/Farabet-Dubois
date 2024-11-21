import PartyModel from '../../../../db/models/PartyModel.js'

const doesPartyExist = async (id) => {
	const party = await PartyModel.query().findById(id)
	return party != null
}

export default doesPartyExist