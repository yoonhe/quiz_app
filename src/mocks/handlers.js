import { rest } from "msw";

import { getItem } from "../utils/storage";

const KEY = "quiz_list";

export const handlers = [
  rest.get("/quiz", (req, res, ctx) => {
    const quizData = JSON.parse(getItem(KEY));

    return res(ctx.status(200), ctx.json(quizData));
  }),
  rest.get("/quiz/:id", (req, res, ctx) => {
    const storageData = JSON.parse(getItem(KEY));

    const { id } = req.params;

    return res(ctx.status(200), ctx.json(storageData.questions[id]));
  }),
];
