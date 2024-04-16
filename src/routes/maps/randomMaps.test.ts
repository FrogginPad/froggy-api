// test/index.test.ts
import { describe, expect, it } from 'bun:test';
import { Elysia } from 'elysia';
import { valMapsRandom } from ".";
import maps from './maps.json';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0; // Mock random to be 0, select first map in array for each
global.Math = mockMath;

// First map of each entry
const mockResponse = {
  "standard": maps.standard[0],
  "rotation": maps.rotation[0],
  "tdm": maps.tdm[0]
}

describe('/v1/maps/random test', () => {
    it('returns random selection of maps', async () => {
        const app = new Elysia().get('/v1/maps/random', valMapsRandom)

        const response = await app
            .handle(new Request('http://localhost:3000/v1/maps/random'))
            .then((res) => res.text())

        expect(JSON.parse(response)).toMatchObject(mockResponse);
    })
})