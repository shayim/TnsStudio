import { Injectable } from "@angular/core";

import * as appSettings from 'application-settings';

interface IKeys {
  currentUser: string;
}

@Injectable()
export class DatabaseService {
  static KEYS: IKeys = {
    currentUser: 'current-user'
  };

  setItem(key: string, value: any): void {
    appSettings.setString(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    let item = appSettings.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return item;
  }

  removeItem(key: string): void {
    appSettings.remove(key);
  }
}