import Router from "koa-router";
const mask = require("koa-json-mask");

const router = new Router();
router.use(mask());

router.get(`/coinflip`, async ctx => {
  const flip = Math.random() >= 0.5 ? "heads" : "tails";
  try {
    ctx.body = {
      status: "success",
      flip
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
