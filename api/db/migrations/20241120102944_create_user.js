export const up = async (knex) => {
	return knex.schema.createTable('users', function (table) {
		table.increments('id')
		table.string('email', 255).notNullable()
		table.string('password_hash', 256).notNullable()
		table.string('password_salt', 256).notNullable()
		table.string('first_name', 255)
		table.string('last_name', 255)
		table.integer('age')
		table.timestamps(true, true)
	})
}

export const down = async (knex) => {
	return knex.schema.dropTable('users')
}
