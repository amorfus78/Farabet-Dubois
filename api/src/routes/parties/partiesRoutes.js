import {
	partyNameValidator,
	partyDescriptionValidator,
	priceValidator,
	startDateValidator,
	numberOfSpotsValidator,
	consumablesNeededValidator,
	partyTypeValidator,
	verifyTokenValidator,
	idValidator,
	cityValidator,
	statusValidator,
} from '../../validators.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'
import {
	createPartyController,
	getAllPartiesForUserController,
	updatePartyController,
	searchPartiesController,
	getPartyByIdController,
	joinPartyController,
	getParticipantsController,
	getAcceptedParticipantsController,
	updateParticipantStatusController,
} from '../../controllers/parties/partiesController.js'


const partiesRoutes = (app) => {
	app.post('/parties',
		validate({
			body: {
				name: partyNameValidator,
				description: partyDescriptionValidator,
				price: priceValidator,
				start_date: startDateValidator,
				number_of_spots: numberOfSpotsValidator,
				consumables_needed: consumablesNeededValidator,
				type: partyTypeValidator.required(),
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		createPartyController
	)

	app.get('/parties/user/:id',
		validate({
			params: {
				id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		getAllPartiesForUserController
	)

	app.put('/parties/:id',
		validate({
			params: {
				id: idValidator,
			},
			body: {
				name: partyNameValidator,
				description: partyDescriptionValidator,
				price: priceValidator,
				start_date: startDateValidator,
				number_of_spots: numberOfSpotsValidator,
				consumables_needed: consumablesNeededValidator,
				type: partyTypeValidator.required(),
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		updatePartyController
	)

	app.get('/parties',
		validate({
			query: {
				city: cityValidator,
				type: partyTypeValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		searchPartiesController
	)

	app.get('/parties/:id',
		validate({
			params: {
				id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		getPartyByIdController
	)

	app.post('/parties/:id/join',
		validate({
			params: {
				id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		joinPartyController
	)

	app.get('/parties/:id/accepted-participants',
		validate({
			params: {
				id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		getAcceptedParticipantsController
	)

	app.get('/parties/:id/participants',
		validate({
			params: {
				id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		getParticipantsController
	)

	app.put('/parties/:partyId/participants/:participantId',
		validate({
			params: {
				partyId: idValidator,
				participantId: idValidator,
			},
			body: {
				status: statusValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			}
		}),
		authenticate,
		updateParticipantStatusController
	)
}

export default partiesRoutes