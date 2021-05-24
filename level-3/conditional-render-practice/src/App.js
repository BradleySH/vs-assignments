import React, {Component} from "react"


class App extends Component {
  state = { 
    isLoggedIn: false
   }
  handleClick = () => {
     this.setState((prevState) => {
       return {
         isLoggedIn:!prevState.isLoggedIn
       }
     })
   }

  render() { 
    return ( 
      <div>
        {this.state.isLoggedIn === true ? <h1>You are logged in</h1> : <h1>You are logged out</h1>}
        <button onClick={this.handleClick}>Log In</button>
      </div>
     );
  }
}
 
export default App;
