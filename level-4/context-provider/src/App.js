import React from "react"
import Header from "./Header"
import Button from "./Button"
import './App.css';
import {ThemeContextConsumer} from "./ThemeContext";

function App() {
  return (
    <div>
      <Header />
      <Button />
      
    </div>
  );
}

export default App;
