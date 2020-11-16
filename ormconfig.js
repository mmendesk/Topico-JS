module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "angelo_yt2",
  "password": "docker",
  "database": "db_nestjs_query",
  "entities": [
    "src/models/**/*.ts"
  ],
  "migrations": [
    "src/database/migrations/**/*.ts"
  ],
  "cli": {
    "migrationsDir": [
      "src/database/migrations/"
    ],
    "entitiesDir": "src/models"
  }
};
