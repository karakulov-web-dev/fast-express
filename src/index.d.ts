/**
 * @author karakulov.web.dev@gmail.com
 */
/// <reference types="express-serve-static-core" />
import express from "express";
interface FastExpressHandlerFunc {
    (req: express.Request): Promise<any>;
}
interface FastExpressAppMiddlewareCb {
    (app: express.Application): Promise<any>;
}
declare class FastExpress {
    [key: string]: FastExpressHandlerFunc;
    constructor(port: number, cb?: FastExpressAppMiddlewareCb);
    default(req: Express.Request): Promise<string>;
}
export default FastExpress;
export { express, FastExpress };
