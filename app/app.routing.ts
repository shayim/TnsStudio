import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PlayerComponent } from './player/components/player.component';

const routes: Routes = [
    { path: "", redirectTo: "/player", pathMatch: "full" },
    { path: "player", component: PlayerComponent },
    { path: "recorder", loadChildren: 'recorder/recorder.module#RecorderModule' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }