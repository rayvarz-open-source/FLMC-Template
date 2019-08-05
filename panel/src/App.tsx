import React from "react";
import logo from "./logo.svg";
import FLMC, { FormController, Label } from "flmc-lite-renderer";
import "./App.css";
import { RouteCategory } from "flmc-lite-renderer/build/router/route";

class SampleForm extends FormController {
  elements = [Label("This is a sample form")];
}

const rootCategory: RouteCategory = {
  hidden: false,
  name: "Root"
};

const App: React.FC = () => {
  return (
    <FLMC
      routes={[
        {
          name: "Home",
          path: "/",
          builder: (path, params) => new SampleForm(),
          category: rootCategory,
          hidden: false
        }
      ]}
    />
  );
};

export default App;
