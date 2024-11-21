export const up = async (knex) => {
	return knex.schema.alterTable('users', function (table) {
		table.integer('address_id').references('id').inTable('addresses')
	})
}

export const down = async (knex) => {
	return knex.schema.alterTable('users', function (table) {
		table.dropColumn('address_id')
	})
}
