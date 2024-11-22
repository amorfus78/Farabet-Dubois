export const up = async (knex) => {
	await knex.schema.createTable('hobbies_users', (table) => {
		table.increments('id').primary()
		table.integer('user_id').references('id').inTable('users')
		table.integer('hobby_id').references('id').inTable('hobbies')
	})
}

export const down = async (knex) => {
	await knex.schema.dropTable('hobbies_users')
}
