import { LiveReload } from "@remix-run/react";

import type { LinksFunction } from '@remix-run/node';

import tailwindStyles from '~/styles/tailwind.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStyles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <div className="flex justify-center">
        <p className="text-6xl text-red-900">
        Hello world
        </p>
        </div>

        <LiveReload />
      </body>
    </html>
  );
}
