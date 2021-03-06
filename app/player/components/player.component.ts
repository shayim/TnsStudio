import { Component } from '@angular/core';

@Component({
  template: `
  <ActionBar title="TNSStudio">
  </ActionBar>
  <GridLayout rows="*, 100" columns="*">
    <track-list row="0" col="0"></track-list>
    <player-controls row="1" col="0"></player-controls>
  </GridLayout>
  `
})
export class PlayerComponent {}