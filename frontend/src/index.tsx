import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { render } from "solid-js/web";

import { AuthProvider } from "./context/auth";

import { Home } from "./components/home";
import { Login } from "./components/login";
import { NotProtected, Protected } from "./components/protected";

import "./index.scss";

const root = document.getElementById("root");

if (!(root instanceof HTMLElement)) {
  throw new Error("Root element not found");
}

render(
  () => (
    <div class="container-fluid">
      <MetaProvider>
        <Router>
          <AuthProvider>
            <Route component={Protected}>
              <Route path="/" component={Home} />
            </Route>

            <Route component={NotProtected}>
              <Route path="/login" component={Login} />
            </Route>
          </AuthProvider>
        </Router>
      </MetaProvider>
    </div>
  ),
  root
);
