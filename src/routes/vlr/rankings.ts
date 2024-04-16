import { AxiosRequestConfig } from "axios";
import { scrapeTeams } from "./scrape.js";

export const vlrGetRankings = async (req:AxiosRequestConfig) => {
  const rankings = await scrapeTeams(req.params.region);
  return rankings;
};

export const vlrGetRankingsDetails = {
  detail: {
    summary: 'Gets the VLR rankings',
    tags: ['VLR']
  }
}