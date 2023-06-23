import Router from "koa-router";
import axios, { AxiosRequestConfig, AxiosResponse} from "axios";
import { ENDPOINTS } from "../consts";
const mask = require("koa-json-mask");
require("dotenv").config();

const router = new Router();
router.use(mask())

const config: any = { // needs any, idk why it won't use AxiosRequestConfig
  method: "get",
  url: ENDPOINTS.content.contents,
  headers: {
    "Content-Type": "application/json",
    "X-Riot-Token": process.env.RIOT_API_KEY
  }
};

router.get(`/val/content`, async (ctx) => {
  try {
    const response: AxiosResponse = await axios(config);
    ctx.body = response.data;
  } catch (err) {
    console.error(err);
  }
});

export default router;