require("dotenv").config();
const http = require("http");

const expressApp = require("./express");
const connectDb = require("./db/connect-db");

const port = process.env.PORT || 6000;
const dbUrl = process.env.dbUrl;
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;

const server = http.createServer(expressApp);

const startServer = async () => {
  try {
    await connectDb(dbUrl, dbUser, dbPassword);
    server.listen(port, () =>
      console.log(`connected to db and server running on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
