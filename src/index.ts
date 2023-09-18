import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { config } from "./config";
import { coinflip, coinflipDetail } from "./routes/coinflip";
import { ping, pingDetail, status, statusDetail } from "./routes/health";
import { valStatus, valStatusDetail } from "./routes/val/status";
import { valMapsRandom, valMaps, valMapsDetail, valMapsRandomDetail } from "./routes/val/maps";
import { valContent, valContentDetails } from "./routes/val/content";
import { IType } from './routes/val/maps/maps.d';

const app = new Elysia();
const PORT = config.port;

// set CORS
app.use(cors());

// status routes
app.get('/ping', ping, {...pingDetail});
app.get('/status', status, {...statusDetail});

// general routes
app.get('/coinflip', coinflip, {...coinflipDetail});

// val routes
app.group('/val', app => app
    .get('/status', valStatus, {...valStatusDetail})
    .get('/content', valContent, {...valContentDetails})
    .group('/maps', app => app
      .get('', valMaps, {...valMapsDetail})
      .get('/random', valMapsRandom, {...valMapsRandomDetail})
    )
);

app.use(swagger({
  documentation: {
    info: {
      title: 'Tadpole Documentation',
      version: '1.0.0'
    }
  }
}));

app.listen(PORT)