
export interface ITrack {
  filepath?: string;
  name?: string;
  order?: number;
  volumn?: number;
  solo?: boolean;
}

export class Track implements ITrack {
  filepath: string;
  name: string;
  order: number;
  volumn: number;
  solo: boolean;

  constructor(model?: any) {
    if (model) {
      for (let key in model) {
        this[key] = model[key];
      }
    }
  }
}