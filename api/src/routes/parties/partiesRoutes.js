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
} from '../../validators.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'
import { createPartyController, getAllPartiesForUserController } from '../../controllers/parties/partiesController.js'

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
}

export default partiesRoutes