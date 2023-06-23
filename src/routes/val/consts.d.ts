export default interface IEndpoints {
  content: IContent;
  match: IMatch;
  ranked: IRanked;
  status: IStatus;
}

export interface IContent {
  contents: string;
}

export interface IMatch {
  byID: string;
  byPUUID: string;
  byQueue: string;
}

export interface IRanked {
  leaderboards: string;
}

export interface IStatus {
  platformData: string;
}
