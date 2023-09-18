import maps from './maps.json';

export const valMaps = () => {

  return {
    ...maps
  }
}

export const valMapsDetail = {
  detail: {
    summary: 'Gets all VALORANT maps',
    tags: ['Valorant']
  }
}
