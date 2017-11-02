import { Injectable } from '@angular/core';

import { ITrack, Track } from '../../core/models/track.model';
import { DatabaseService } from '../../core/services';


@Injectable()
export class PlayerService {
  playing: boolean;
  tracks: ITrack[]

  constructor(database: DatabaseService) {
    this.tracks = [
      new Track({ name: 'a song', solo: false }),
      new Track({ name: '2nd song', solo: false })
    ]
  }

  play(index: number): void {
    this.playing = true;
  }

  pause(index: number): void {
    this.playing = false;
  }

  addTrack(track: ITrack): void {
    this.tracks.push(track);
  }

  removeTrack(track: ITrack): void {
    let index = this.tracks.indexOf(track);

    if (index > 0) { this.tracks.splice(index, 1) };
  }

  reorderTrack(track: ITrack, newIndex: number): void {
    let index = this.tracks.indexOf(track);

    if (index > 0) {
      this.tracks.splice(newIndex, 0, ...this.tracks.splice(index, 1));
    }
  }
}