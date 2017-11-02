import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PLAYER_PROVIDERS } from './services';
import { PlayerComponent } from './components/player.component';
import { PlayerControlsComponent } from './components/player-controls.component';
import { TrackListComponent } from './components/track-list.component';

@NgModule({
  declarations: [PlayerComponent, PlayerControlsComponent, TrackListComponent],
  imports: [NativeScriptModule],
  providers: [...PLAYER_PROVIDERS],
  exports: [PlayerComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PlayerModule { }