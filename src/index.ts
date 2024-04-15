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
import {
  vlrGetRankings,
  vlrGetRankingsDetails,
  vlrGetEvents,
  vlrGetEventsDetails,
  vlrGetUpcomingMatches,
  vlrGetUpcomingMatchesDetails,
  vlrGetMatchResults,
  vlrGetMatchResultsDetails
} from "./routes/vlr";

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

// vlr routes
app.group('/vlr', app => app
    .get('/rankings/:region', vlrGetRankings, {...vlrGetRankingsDetails})
    .group('/events', app => app
      .get('/', vlrGetEvents, {...vlrGetEventsDetails})
    )
    .group('/matches', app => app
      .get('/upcoming', vlrGetUpcomingMatches, {...vlrGetUpcomingMatchesDetails})
      .get('/results', vlrGetMatchResults, {...vlrGetMatchResultsDetails})
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