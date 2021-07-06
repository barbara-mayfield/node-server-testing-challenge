module.exports = {

  dev: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/spells.db3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: "./data/test.db3"
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
