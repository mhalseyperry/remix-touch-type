import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import tailwindStyles from "~/styles/tailwind.css";
import { KeymapProvider } from "./contexts/KeymapContext";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export default function Root() {
  return (
    <KeymapProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Touch Type</title>
          <Links />
          <Scripts />
        </head>
        <body>
          <Outlet />

          <LiveReload />
        </body>
      </html>
    </KeymapProvider>
  );
}
