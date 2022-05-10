import { rest } from 'msw';

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ name: 'Ann' }, { name: 'Sam' }]));
  }),
];
