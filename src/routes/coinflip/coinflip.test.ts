// test/index.test.ts
import { describe, expect, it, mock } from 'bun:test';
import { Elysia } from 'elysia';
import { coinflip } from ".";

// Coinflip uses random math, mock it so we can control the output
const mockMath = Object.create(global.Math);

describe('/v1/coinflip test', () => {
    it('returns heads', async () => {

        // set Math to return .6 (>= .5 means heads)
        mockMath.random = () => .6;
        global.Math = mockMath;
        const app = new Elysia().get('/v1/coinflip', coinflip)

        const response = await app
            .handle(new Request('http://localhost:3000/v1/coinflip'))
            .then((res) => res.text())

        expect(response).toContain("heads")
    })

    it('returns tails', async () => {

      // set Math to return .1
      mockMath.random = () => .1;
      global.Math = mockMath;
      const app = new Elysia().get('/v1/coinflip', coinflip)

      const response = await app
          .handle(new Request('http://localhost:3000/v1/coinflip'))
          .then((res) => res.text())

      expect(response).toContain("tails")
  })
})