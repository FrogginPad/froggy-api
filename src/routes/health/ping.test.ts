// test/index.test.ts
import { describe, expect, it } from 'bun:test';
import { Elysia } from 'elysia';
import { ping } from ".";

describe('/ping test', () => {
    it('returns pong', async () => {
        const app = new Elysia().get('/ping', ping)

        const response = await app
            .handle(new Request('http://localhost:3000/ping'))
            .then((res) => res.text())

        expect(response).toBe('pong')
    })
})