import React, {Component} from "react"
import './App.css';
import Form from "./Component/Form"
import UglyList from "./Component/UglyList"
import {UglyContextConsumer} from "./UglyContext"

class App extends Component {
  render() { 
    return ( 
      <div>
        <Form />
        <UglyList />
      </div>
      

    )
  }
}
export default App