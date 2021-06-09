import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContextProvider} from "./ThemeContext"
import App from './App';
//ThemeContext.Provider & ThemeContext.Consumer


ReactDOM.render(
          <ThemeContextProvider>
          <App />
          </ThemeContextProvider>,
           document.getElementById('root'));

