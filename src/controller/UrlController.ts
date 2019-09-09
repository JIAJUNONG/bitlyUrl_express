import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UrlController {
    async listDetails(request: Request, response: Response, next: NextFunction){
        response.json(storage.details)
    }

    async listSpecific(request: Request, response: Response, next: NextFunction){
      let url = {}
      for (let u of storage.details){
        if (u.id === parseInt(request.params.id)){
          url = u
          // response.json(u.longUrl)
          response.redirect(u.longUrl)
          break
        }
      }
      // response.json(url.storage.details.longUrl)
  }

    async postUrl(request: Request, response: Response, next: NextFunction) {
        const data = request.body;
        storage.details.push({
          id: storage.details.length + 1,
          longUrl: data.longUrl
        });
        response.json(data)
        response.json(storage.details)
        response.sendStatus(201);
      }

    // async postUrl(request: Request, response: Response, next: NextFunction) {
    // const data = request.body;
    // storage.details.push({
    //   id: storage.details.length + 1,
    //   longUrl: data.longUrl // testing in postman
    //   // longUrl: data.urlInput.value
    // });

    // response.sendStatus(201);
  }
