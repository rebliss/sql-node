module.exports = {
    development: {
      client: 'mysql2', // Specify the database client (e.g., 'mysql2' for MySQL)
      connection: {
        host: 'localhost', // Your database host
        user: 'root', // Your database username
        password: '', // Your database password
        database: 'krishna', // Your database name
      },
      migrations: {
        directory: './migrations', // The directory where migration files are stored
      },
      seeds: {
        directory: './seeds', // The directory where seed files are stored
      },
    },
  };
  