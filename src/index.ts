import * as express from "express";
import * as bodyParser from  "body-parser";
import {NextFunction, Request, Response} from "express";
import { Routes } from "./routes";
import * as cors from 'cors';
import { url } from "inspector";


export const storage = {
    details: [
        {
            "id": 1,
            "longUrl": "https://www.youtube.com/watch?v=FVdQETvHBoE"
        },
        {
            "id": 2,
            "longUrl": "https://app.netlify.com/sites/quirky-newton-c63acc/deploys/5d70ac93604f2f50b2f13d2f"
        },
        {
            "id": 3,
            "longUrl": "http://www.airbnb.com/"
        }

    ]
}


export const srcPath = __dirname
const PORT = process.env.PORT || 3000;

// create and setup express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '\\public'));
app.use(cors())

// register routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

// app.get("/test", (req: Request, res: Response) => {
//     res.redirect("https://www.google.com/")
// })

// start express server
app.listen(PORT);