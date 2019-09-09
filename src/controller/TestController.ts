import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class TestController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.send("Hello World by Jia Jun!")
    }
}