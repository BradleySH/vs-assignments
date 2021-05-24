import React, {Component} from "react"

class App extends Component {
  constructor() {
    super();
    this.state = { 
      loading: false,
      character: {}
     }
  }

componentDidMount(){
  this.setState({loading: true})
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })
    })
}

  render() { 
    const text = this.state.loading === true ? "loading..." : this.state.character.name
    return ( 
      <div>
        <p>{text}</p>
      </div>
     );
  }
}
 
export default App;
