/**
 * @author karakulov.web.dev@gmail.com
 */

import express from "express";

interface FastExpressHandlerFunc {
  (req: Express.Request): Promise<any>;
}

export default class FastExpress {
  [key: string]: FastExpressHandlerFunc;
  constructor(port: number) {
    let app = express();
    app.use(express.json());
    app.use(async (req, res, next) => {
      let fName = req.url.replace(/^\//, "");
      if (!this.constructor.prototype.hasOwnProperty(fName)) {
        res.send(await this.default(req));
        return;
      }
      res.send(await this[fName](req));
    });
    app.listen(port);
  }
  public async default(req: Express.Request) {
    return "default";
  }
}