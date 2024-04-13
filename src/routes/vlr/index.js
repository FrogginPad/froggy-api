import {
  scrapeEvents,
  scrapeMatchResults,
  scrapeTeams,
  scrapeUpcomingMatches,
} from "./scrape.js";
  
// @desc   GET rankings
// @route  GET /api/rankings/:region
// @access Public
export const vlrGetRankings = async (req, res) => {
  const rankings = await scrapeTeams(req.params.region);
  return rankings;
};

export const vlrGetRankingsDetails = {
  detail: {
    summary: 'Gets the VLR rankings',
    tags: ['Valorant']
  }
}


// @desc   GET events
// @route  GET /api/events
// @access Public
export const vlrGetEvents = async (req, res) => {
  const events = await scrapeEvents();
  return events;
};

export const vlrGetEventsDetails = {
  detail: {
    summary: 'Gets VLR events details',
    tags: ['Valorant']
  }
}

// @desc   GET upcoming matches
// @route  GET /api/matches/upcoming
// @access Public
export const vlrGetUpcomingMatches = async (req, res) => {
  const upcomingMatches = await scrapeUpcomingMatches();
  return upcomingMatches;
};

export const vlrGetUpcomingMatchesDetails = {
  detail: {
    summary: 'Gets VLR upcoming match details',
    tags: ['Valorant']
  }
}

// @desc   GET match results
// @route  GET /api/matches/results
// @access Public
export const vlrGetMatchResults = async (req, res) => {
  const matchResults = await scrapeMatchResults();
  return matchResults;
};

export const vlrGetMatchResultsDetails = {
  detail: {
    summary: 'Gets VLR match results details',
    tags: ['Valorant']
  }
}
