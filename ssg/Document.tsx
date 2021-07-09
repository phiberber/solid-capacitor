import { Component } from "solid-js";
import { HydrationScript, NoHydration } from "solid-js/web";
import App from "../src/App";

const Document: Component<{ preloadlist?: string[]; initialURL?: string }> = ({
  initialURL,
  preloadlist = [],
}) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="/js/index.js" type="module"></script>
        <link rel="stylesheet" href="windi.css" />
        <NoHydration>
          {preloadlist.map((href) => (
            <link rel="modulepreload" href={href} />
          ))}
        </NoHydration>
      </head>
      <body>
        <App initialURL={initialURL} />
        <HydrationScript />
      </body>
    </html>
  );
};

export default Document;
