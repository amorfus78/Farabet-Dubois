const init_routes = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello World')
	})
}

export default init_routes
