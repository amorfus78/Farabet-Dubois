import express from 'express'
import bodyParser from 'body-parser'
import knex from 'knex'
import cors from 'cors'

import config from './src/config.js'
import init_routes from './src/routes/init_routes.js'
import BaseModel from './db/models/BaseModel.js'

const app = express()

const db = knex(config.db)

BaseModel.knex(db)

app.use(bodyParser.json())

const corsOptions = {
	origin: 'http://localhost:5173',
	methods: 'GET,POST,PUT,DELETE,PATCH',
	allowedHeaders: 'Content-Type,Authorization',
}

app.use(cors(corsOptions))

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`)
})

init_routes(app)
