import express from "express";
import { router, publicProcedure } from "./trpc";
import * as trpc from "@trpc/server/adapters/express";

const app = express();
const PORT = process.env.PORT || 3002;

const appRouter = router({
  greeting: publicProcedure.query(() => {
    return "Hello from server";
  }),
});

app.use("/trpc", trpc.createExpressMiddleware({ router: appRouter }));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log("Listening on", PORT));

export type AppRouter = typeof appRouter;
