import Router from "koa-router";
const mask = require("koa-json-mask");

const router = new Router();
router.use(mask());

router.get(`/template`, async ctx => {
  try {
    ctx.body = {
      status: "success",
      data: []
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
