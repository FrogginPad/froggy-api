import { scrapeEvents } from "./scrape.js";

export const vlrGetEvents = async () => {
  const events = await scrapeEvents();
  return events;
};

export const vlrGetEventsDetails = {
  detail: {
    summary: 'Gets VLR events details',
    tags: ['VLR']
  }
}