export const up = async (knex) => {
	return knex.schema.createTable('users', function (table) {
		table.increments('id')
		table.string('first_name', 255).notNullable()
		table.string('last_name', 255).notNullable()
		table.string('email', 255).notNullable()
		table.string('postal_code', 255).notNullable()
		table.string('city', 255).notNullable()
		table.integer('age').notNullable()
		table.string('password_hash', 255).notNullable()
		table.string('password_salt', 255).notNullable()
		table.timestamps(true, true)
	})
}

export const down = async (knex) => {
	return knex.schema.dropTable('users')
}
