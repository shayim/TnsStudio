import { PlayerService } from '../services/player.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'player-controls',
  template:`<GridLayout rows="100" columns="100,*" [row]="row" [col]="col">
    <Button [text]="playerService.playing? 'Stop':'Play'" (tap)="togglePlay()" row="0" col="0"></Button>
    <Slider minValue="0" [maxValue]="duration" [value]="currentTime" row="0", col="1"></Slider>
  </GridLayout>`
})
export class PlayerControlsComponent {
  @Input() row: number;
  @Input() col: number;

  duration = 100;
  currentTime = 50;

  constructor(public playerService: PlayerService) {}

  ngOnInit() {
    console.log(this.row, this.col);
  }

  togglePlay() {
    this.playerService.playing = !this.playerService.playing;
  }
}