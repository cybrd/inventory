import { type Component, useContext } from "solid-js";
import { A } from "@solidjs/router";
import { AuthContext } from "../context/auth";

export const Menu: Component = () => {
  const auth = useContext(AuthContext);

  return <div class="text-nowrap p-2 d-print-none">TEST MENU</div>;
};
