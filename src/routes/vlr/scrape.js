import axios from "axios";
import * as cheerio from "cheerio";

const upcomingMatches = {
  matches: [],
};

const todaysMatches = {
  matches: []
}

export async function scrapeUpcomingMatches() {
  // Fetch the data
  const { data } = await axios.get("https://www.vlr.gg/matches");

  // Load up the html
  const $ = cheerio.load(data);
  const item = $("div#wrapper");

  // Extract the data that we need
  $(item)
    .find("#wrapper > div.col-container div div.wf-card")
    .each((index, element) => {
      $(element)
        .find("a.match-item")
        .each((ind, ele) => {
          upcomingMatches.matches.push({
            team_one_name: $(ele)
              .find("div.match-item-vs-team-name")
              .eq(0)
              .text()
              .trim(),
            team_two_name: $(ele)
              .find("div.match-item-vs-team-name")
              .eq(1)
              .text()
              .trim(),
            match_url: `www.vlr.gg` + $(ele).attr("href"),
            event_name: $(ele)
              .find("div.match-item-event")
              .clone()
              .children()
              .remove()
              .end()
              .text()
              .trim(),
            event_icon_url: $(ele).find("div.match-item-icon img").attr("src"),
            match_time: $(ele).find("div.match-item-time").text().trim(),
            eta: $(ele).find("div.ml-eta").text().trim(),
          });
        });
    });

  return upcomingMatches;
}

export async function scrapeTodaysMatches() {
  // Fetch the data
  const { data } = await axios.get("https://www.vlr.gg/matches");

  // Load up the html
  const $ = cheerio.load(data);
  const item = $("div#wrapper");

  // Extract the data that we need
  $(item)
    .find("#wrapper > div.col-container div div.wf-card:nth-of-type(3)")
    .each((index, element) => {
      $(element)
        .find("a.match-item")
        .each((ind, ele) => {
          todaysMatches.matches.push({
            team_one_name: $(ele)
              .find("div.match-item-vs-team-name")
              .eq(0)
              .text()
              .trim(),
            team_two_name: $(ele)
              .find("div.match-item-vs-team-name")
              .eq(1)
              .text()
              .trim(),
            match_url: `www.vlr.gg` + $(ele).attr("href"),
            event_name: $(ele)
              .find("div.match-item-event")
              .clone()
              .children()
              .remove()
              .end()
              .text()
              .trim(),
            event_icon_url: $(ele).find("div.match-item-icon img").attr("src"),
            match_time: $(ele).find("div.match-item-time").text().trim(),
            eta: $(ele).find("div.ml-eta").text().trim(),
          });
        });
    });

  return todaysMatches;
}

