import type { MetaFunction } from "@remix-run/node";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../backend/src/index";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3002/trpc",
    }),
  ],
});

export const loader = async () => {
  // eslint-disable-next-line no-console
  console.log(await trpc.greeting.query());
  return null;
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="bg-green-500">Hello World</div>
      <Button>HEllo</Button>
    </div>
  );
}
