module.exports = {
  port: 8080,
  database: {
    user: "admin",
    password: "fullstack",
    port: 27017,
    host: "localhost",
    db: 'breeddog',
  },
  mongoUrl() {
    const { user, password, port, host, db } = this.database;
    return `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`;
  }
};
