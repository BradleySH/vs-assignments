
import React, { Component } from 'react';
import HitList from "./HitList"
import "./style.css"


class App extends Component {
  constructor() {
    super();
    this.state = { 
      targets: []
     }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => {
          this.setState({
            targets: data 
          })
        })
  }
  render() { 
    console.log(this.state);
    const mappedArray = this.state.targets.map(target =>  <HitList name={this.state.name} image={this.state.image} {...target}/>)
    console.log(mappedArray);
    return ( 
      <div className="container">
        <HitList/>
      </div>,
      <div className="card-container">{mappedArray}</div>
      
    );
  }
}
 
export default App;
