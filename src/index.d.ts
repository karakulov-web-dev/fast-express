/**
 * @author karakulov.web.dev@gmail.com
 */
/// <reference types="express-serve-static-core" />
interface FastExpressHandlerFunc {
    (req: Express.Request): Promise<any>;
}
interface FastExpressAppMiddlewareCb {
    (app: Express.Application): Promise<any>;
}
export default class FastExpress {
    [key: string]: FastExpressHandlerFunc;
    constructor(port: number, cb?: FastExpressAppMiddlewareCb);
    default(req: Express.Request): Promise<string>;
}
export {};
