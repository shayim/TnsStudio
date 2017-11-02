import { Component } from "@angular/core";

import { AuthService } from './core/services';


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(private authService: AuthService) {}
 }
