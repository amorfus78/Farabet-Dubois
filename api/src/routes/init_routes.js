import registerRoute from './auth/register.js'

const init_routes = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello World')
	})

	registerRoute(app)
}

export default init_routes
