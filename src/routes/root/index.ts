import Router from "koa-router";
const mask = require("koa-json-mask");

const router = new Router();
router.use(mask());

const message = "Welcome to the Froggin API";

router.get(`/`, async ctx => {
  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = `<p>${message}</p>`;
      break;
    case 'json':
      ctx.body = {
        message
      };
      break;
    default:
      ctx.type = 'text';
      ctx.body = message;
  }
});

export default router;
