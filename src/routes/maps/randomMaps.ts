import maps from './maps.json';

export const valMapsRandom = () => {
  const generateMap = (mapList: string[]) => {
    return mapList[Math.floor(Math.random() * mapList.length)];
  }

  const standardMap = generateMap(maps.standard);
  const rotationMap = generateMap(maps.rotation);
  const tdmMap = generateMap(maps.tdm);

  const randomMapArray = {
    standard: standardMap,
    rotation: rotationMap,
    tdm: tdmMap
  }

  return randomMapArray
}

export const valMapsRandomDetail = {
  detail: {
    summary: 'Selects random VALORANT maps for all game modes',
    tags: ['Functions']
  }
}