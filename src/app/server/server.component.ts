import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent{

ServerStatus: number = 10;
ServerId: string = 'offline'

}