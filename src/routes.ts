import {TestController} from "./controller/TestController";
import {UrlController} from "./controller/UrlController";
// import { SubmitLinkComponent } from "../../BitlyCloneAssignment/src/app/submit-link/submit-link.component";



export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},
{
    method: "get",
    route: "/links",
    controller: UrlController,
    action: "listDetails"
},
{
    method: "get",
    route: "/links/:id",
    controller: UrlController,
    action: "listSpecific"
},
{
    method: "post",
    route: "/postUrl",
    controller: UrlController,
    action: "postUrl"
}];