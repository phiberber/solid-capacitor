import { Component, Suspense } from "solid-js";
import { Router, Link, Route } from "solid-app-router";
import { routes, HOME, BYE } from "./routes";

const App: Component<{ initialURL?: string }> = ({ initialURL }) => {
  return (
    <div>
      <Router routes={routes} initialURL={initialURL}>
        <ul>
          <Link href={HOME}>Home</Link>
        </ul>
        <ul>
          <Link href={BYE}>Bye</Link>
        </ul>
        <Suspense fallback={<span>loading</span>}>
          <Route />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
