import Router from "koa-router";
import axios, { AxiosRequestConfig, AxiosResponse} from "axios";
import { ENDPOINTS } from "../consts";
const mask = require("koa-json-mask");
require("dotenv").config();

const router = new Router();
router.use(mask())

const config: any = { // needs any, idk why it won't use AxiosRequestConfig
  method: "get",
  url: ENDPOINTS.status.platformData,
  headers: {
    "Content-Type": "application/json",
    "X-Riot-Token": process.env.RIOT_API_KEY
  }
};

router.get(`/val/status`, async (ctx) => {
  try {
    const response: AxiosResponse = await axios(config);

    if(response.data.maintenances.length) {
      ctx.body = {
        status: "maintenances",
        ...response.data.maintenance[0]
      }
    }

    if(response.data.incidents.length) {
      ctx.body = {
        status: "incidents",
        ...response.data.incidents[0]
      }
    }
 
    if(!response.data.maintenances.length && !response.data.incidents.length) {
      ctx.body = { status: "success" }
    }



  } catch (err) {
    console.error(err);
  }
});

export default router;