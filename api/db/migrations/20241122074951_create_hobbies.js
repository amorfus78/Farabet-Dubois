export const up = async (knex) => {
	await knex.schema.createTable('hobbies', (table) => {
		table.increments('id').primary()
		table.string('name').notNullable().unique()
	})
}

export const down = async (knex) => {
	await knex.schema.dropTable('hobbies')
}
