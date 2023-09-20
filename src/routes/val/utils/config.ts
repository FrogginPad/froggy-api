export const config:any = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-Riot-Token": Bun.env.RIOT_API_KEY
  }
};