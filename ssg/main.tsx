import { renderToStringAsync } from "solid-js/web";
import Document from "./Document";
// @ts-ignore
import preloadlist from "./build/preloadlist.js";

export default (req: { url: string }) => {
  return renderToStringAsync(() => (
    <Document preloadlist={preloadlist} initialURL={req.url} />
  ));
};
