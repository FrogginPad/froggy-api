import { ENDPOINTS } from "../consts";
import { config } from "../utils";

export const valStatus = async () => {

  if (!Bun.env.RIOT_API_KEY) { return new Response('No API Key', { status: 401 }) }

  const getValAPI = await fetch(ENDPOINTS.status.platformData, config);
  const response = await getValAPI.json()

  if(response.maintenances.length) {
    return {
      status: "maintenances",
      maintenance_status: response.maintenances[0].maintenance_status,
      title: response.maintenances[0].titles[0].content,
      additionalData: response.maintenances
    }
  }

  if(response.incidents.length) {
    return {
      status: "incidents",
      severity: response.incidents[0].incident_severity,
      title: response.incidents[0].titles[0].content,
      additionalData: response.incidents
    }
  }

  if(!response.maintenances.length && !response.incidents.length) {
    return { status: "success" }
  }
}

export const valStatusDetail = {
  detail: {
    summary: 'Gets the VALORANT status',
    tags: ['Valorant']
  }
}