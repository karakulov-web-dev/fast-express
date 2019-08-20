/**
 * @author karakulov.web.dev@gmail.com
 */

import express from "express";

interface FastExpressHandlerFunc {
  (req: express.Request): Promise<any>;
}

interface FastExpressAppMiddlewareCb {
  (app: express.Application): Promise<any>;
}

class FastExpress {
  [key: string]: FastExpressHandlerFunc;
  constructor(port: number, cb?: FastExpressAppMiddlewareCb) {
    let app = express();
    if (cb) {
      cb(app);
    }
    app.use(express.json());
    app.use(async (req, res, next) => {
      let fName = req.url.replace(/^\//, "").replace(/\?.*/, "");
      console.log(fName);
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
export default FastExpress;
export { express, FastExpress };
