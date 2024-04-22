import { scrapeTodaysMatches } from "./scrape.js";

export const vlrGetTodaysMatches = async () => {
  const todaysMatches = await scrapeTodaysMatches();
  return todaysMatches;
};

export const vlrGetTodaysMatchesDetails = {
  detail: {
    summary: 'Gets VLR today\'s match details',
    tags: ['VLR']
  }
}