exports.seed = async (knex) => {
  await knex("spells").truncate()
} 