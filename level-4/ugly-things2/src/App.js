import React from "react"
import { UglyThingsContextProvider } from "./UglyContext"

import './App.css';
import UglyThingsList from "./UglyThingsList";
import Form from "./Form"


function App() {
  return (
    <div>
      <UglyThingsContextProvider>
        <Form />
        <UglyThingsList />
      </UglyThingsContextProvider>
    </div>
  );
}

export default App;
