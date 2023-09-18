import { ENDPOINTS } from "../consts";
import { config } from "../utils";

export const valContent = async () => {
  const getValAPI = await fetch(ENDPOINTS.content.contents, config);
  const response = await getValAPI.json()

  return response;
}

export const valContentDetails = {
  detail: {
    summary: 'Gets all VALORANT content from VALORANT API',
    tags: ['Valorant']
  }
}