import type { APIGatewayEvent, Context } from "aws-lambda";
import createAPI, { Request, Response } from "lambda-api";
import { sum } from "./services/sum";

const api = createAPI();

api.get("/", (_req: Request, res: Response) => {
  res.status(500);
});

api.get("/sum", (_req: Request, res: Response) => {
  res.send(sum(1, 2));
});

export const handler = (event: APIGatewayEvent, context: Context) => {
  return api.run(event, context);
};
