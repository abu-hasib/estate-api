const app = require("./index");
const config = require("./config");
const debug = require("./logger");

debug("booting %s", "estate");

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
