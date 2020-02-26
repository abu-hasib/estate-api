const app = require("./index");
const config = require("./config");
const MongoDB = require("./conn")

MongoDB.connectDB(async(err) => {
  console.log("This is error", err)
  if (err) throw err
  
  const db = MongoDB.getDb()
  app.locals.db = db
  
})

app.listen(config.express.port, config.express.ip, error => {
  if (error) {
    log.error("Unable to listen for connections", error);
    process.exitCode(1);
  }

  console.info(
    "Esate API is listening on http://" +
      config.express.ip +
      ":" +
      config.express.port
  );
});