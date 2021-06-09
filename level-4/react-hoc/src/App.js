import React from 'react'
import {withPointlessHOC} from "./withPointlessHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"
// A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const PointlessHOC = withExtraPropAdded(App);
export default PointlessHOC
