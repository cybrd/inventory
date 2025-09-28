import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { render } from "solid-js/web";

import { AuthProvider } from "./context/auth";

import { Home } from "./components/home";
import { Login } from "./components/login";
import { NotProtected } from "./components/protected";

import "./index.scss";

const root = document.getElementById("root") as HTMLElement;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <div class="container-fluid">
      <MetaProvider>
        <Router>
          <AuthProvider>
            <Route component={NotProtected}>
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
            </Route>
          </AuthProvider>
        </Router>
      </MetaProvider>
    </div>
  ),
  root
);
