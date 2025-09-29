import type { APIGatewayEvent, Context } from "aws-lambda";
import createAPI, { Request, Response } from "lambda-api";

const api = createAPI();

api.get("/status", (_req: Request, _res: Response) => {
  return { status: "ok" };
});

export const handler = (event: APIGatewayEvent, context: Context) => {
  return api.run(event, context);
};
