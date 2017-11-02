import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { LogService } from './log.service';
import { DatabaseService } from './database.service';


@Injectable()
export class AuthService {
  static CURRENT_USER: any;
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private databaseService: DatabaseService,
    private logService: LogService) {

    this._init();
  }

  private _init() {
    AuthService.CURRENT_USER = this.databaseService
      .getItem(DatabaseService.KEYS.currentUser);

    this.logService.debug('Current user: ', AuthService.CURRENT_USER);

    this._notifyState(!!AuthService.CURRENT_USER);
  }

  private _notifyState(auth: boolean): void {
    this.authenticated$.next(auth);
  }
}