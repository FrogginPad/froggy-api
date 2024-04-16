import { scrapeMatchResults } from "./scrape.js";

export const vlrGetMatchResults = async () => {
  const matchResults = await scrapeMatchResults();
  return matchResults;
};

export const vlrGetMatchResultsDetails = {
  detail: {
    summary: 'Gets VLR match results details',
    tags: ['VLR']
  }
}