const express = require("express");
//Routes
const indexRoutes = require("./routes/index.routes");

class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.settings();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3001);
  }

  middlewares() {}

  routes() {
    this.app.use(indexRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(`Server on port ${this.app.get("port")}`);
  }
}

module.exports = App;
