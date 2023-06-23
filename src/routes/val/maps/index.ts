import Router from "koa-router";
import maps from './maps.json';
const mask = require('koa-json-mask');

interface IMaps {
  standard: string[],
  rotation: string[],
  tdm: string[]
}

const router = new Router();
router.use(mask())

router.get(`/val/maps`, async (ctx) => {
  try {
    ctx.body = {
      status: "success",
      ...maps
    };
  } catch (err) {
    console.error(err);
  }
});

router.get(`/val/maps/random`, async (ctx) => {

  const generateMap = (mapList: string[]) => {
    return mapList[Math.floor(Math.random() * mapList.length)];
  }

  const standardMap = generateMap(maps.standard);
  const rotationMap = generateMap(maps.rotation);
  const tdmMap = generateMap(maps.tdm);

  try {
    ctx.body = {
      status: "success",
      standard: standardMap,
      rotation: rotationMap,
      tdm: tdmMap
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;