// test/index.test.ts
import { describe, expect, it } from 'bun:test';
import { Elysia } from 'elysia';
import { status } from ".";

describe('/status test', () => {
    it('return the status', async () => {
        const app = new Elysia().get('/status', status);

        const response = await app
            .handle(new Request('http://localhost:3000/status'))
            .then((res) => res.text())

        expect(response).toBe(`{"status":"success"}`);
    })
})