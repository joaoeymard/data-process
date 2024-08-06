module.exports = {
  client: "mssql",
  connection: {
    server: process.env.HOST,
    port: parseInt(process.env.PORT),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    options: {
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  useNullAsDefault: true,
};
