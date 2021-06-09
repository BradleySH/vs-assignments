import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserContextProvider} from "./UserContext"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */


ReactDOM.render(
                <UserContextProvider>
                    <App />
                </UserContextProvider>,
                document.getElementById('root'));

