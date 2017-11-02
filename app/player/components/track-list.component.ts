import { Component, Input, OnInit } from '@angular/core';

import { LogService } from '../../core/services/log.service';
import { ITrack, Track } from '../../core/models/track.model';
import { PlayerService } from '../services/player.service';


@Component({
  selector: 'track-list',
  template: `<ListView [items]="playerService.tracks" [row]="row" [col]="col">
    <ng-template let-track="item">
      <GridLayout rows="auto" columns="100,*,100">
        <Button text="Record" (tap)="record(track)" row="0" col="0"></Button>
        <Label [text]="track.name" row="0" col="1"></Label>
        <Switch [checked]="track.solo" row="0" col="2"></Switch>
      </GridLayout>
    </ng-template>
  </ListView>`
})
export class TrackListComponent implements OnInit {
  @Input() row: string;
  @Input() col: string;
 
  constructor(public playerService: PlayerService, private logService: LogService) { }

  ngOnInit() {
    console.log(`track-list: ${this.row}`, this.col);
  }
  
  public record(track: ITrack) {
    this.logService.inspect(track);
  }
}