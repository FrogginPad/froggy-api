import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { Logestic } from "logestic";
import staticPlugin from "@elysiajs/static";
import { config } from "./config";
import { coinflip, coinflipDetail } from "./routes/coinflip";
import { ping, pingDetail, status, statusDetail } from "./routes/health";
import { valMapsRandom, valMaps, valMapsDetail, valMapsRandomDetail } from "./routes/maps";

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
app.use(staticPlugin());
app.use(Logestic.preset('fancy'));
  
// status routes
app.get('/ping', ping, {...pingDetail});
app.get('/status', status, {...statusDetail});
app.get('/favicon.ico', () => Bun.file('public/favicon.ico'));

app.group('/v1', app => app
  // general routes
  .get('/coinflip', coinflip, {...coinflipDetail})
  .group('/maps', app => app
    .get('', valMaps, {...valMapsDetail})
    .get('/random', valMapsRandom, {...valMapsRandomDetail})
  )

  // vlr routes
  .group('/vlr', app => app
      .get('/rankings/:region', vlrGetRankings, {...vlrGetRankingsDetails})
      .group('/events', app => app
        .get('/', vlrGetEvents, {...vlrGetEventsDetails})
      )
      .group('/matches', app => app
        .get('/upcoming', vlrGetUpcomingMatches, {...vlrGetUpcomingMatchesDetails})
        .get('/results', vlrGetMatchResults, {...vlrGetMatchResultsDetails})
      )
  )
)

app.use(swagger({
  documentation: {
    info: {
      title: 'Tadpole Documentation',
      version: '1.0.0'
    }
  }
}));

app.listen(PORT)