// test/index.test.ts
import { describe, expect, it } from 'bun:test';
import { Elysia } from 'elysia';
import { valMaps } from ".";
import maps from './maps.json';


describe('/v1/maps test', () => {
    it('returns all maps', async () => {
        const app = new Elysia().get('/v1/maps', valMaps)

        const response = await app
            .handle(new Request('http://localhost:3000/v1/maps'))
            .then((res) => res.text())

        expect(JSON.parse(response)).toMatchObject(maps);
    })
})