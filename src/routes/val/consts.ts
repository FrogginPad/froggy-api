import type IEndpoints from './consts.d';

export const API_BASE:string = "https://na.api.riotgames.com/val";
export const LOCALE_FILTER:string = "?locale=en-US";
export const VERSION:string = "v1";
export const REGIONS:string[] = ["AP", "BR", "EU", "KR", "LATAM", "NA", "ESPORTS"];
export const ENDPOINTS: IEndpoints = {
  "content": {
    "contents": `${API_BASE}/content/${VERSION}/contents${LOCALE_FILTER}`,
  },
  "match": {
    "byID": `${API_BASE}/match/${VERSION}/matches/`,
    "byPUUID": `${API_BASE}/match/${VERSION}/matchlist/by-puuid/`,
    "byQueue": `${API_BASE}/match/${VERSION}/recent-matches/by-queue/`,
  },
  "ranked": {
    "leaderboards": `${API_BASE}/ranked/${VERSION}/leaderboards/by-act/`
  },
  "status": {
    "platformData": `${API_BASE}/status/${VERSION}/platform-data/`
  }
}
