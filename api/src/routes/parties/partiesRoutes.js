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
} from '../../validators.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'
import { createPartyController, getAllPartiesForUserController, updatePartyController, searchPartiesController } from '../../controllers/parties/partiesController.js'


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
				type: partyTypeValidator,
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
				type: partyTypeValidator,
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
}

export default partiesRoutes