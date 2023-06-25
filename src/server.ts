import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import cors from "koa2-cors";
import logger from "koa-logger";
import healthcheckRoutes from "./routes/health";
import mapsRoutes from "./routes/val/maps";
import contentRoutes from "./routes/val/content";
import statusRoutes from "./routes/val/status";
import coinFlipRoutes from "./routes/coinflip";
import rootRoutes from "./routes/root";

import { config } from "./config";

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(logger());

app.use(rootRoutes.routes());
app.use(healthcheckRoutes.routes());
app.use(contentRoutes.routes());
app.use(statusRoutes.routes());
app.use(mapsRoutes.routes());
app.use(coinFlipRoutes.routes());
app.use(serve('./public'));

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;