import React from "react";
import { render } from "react-dom";
import { Register } from "./demo";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Register />, rootElement);
}
