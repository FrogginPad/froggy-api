import { scrapeUpcomingMatches } from "./scrape.js";

export const vlrGetUpcomingMatches = async () => {
  const upcomingMatches = await scrapeUpcomingMatches();
  return upcomingMatches;
};

export const vlrGetUpcomingMatchesDetails = {
  detail: {
    summary: 'Gets VLR upcoming match details',
    tags: ['VLR']
  }
}