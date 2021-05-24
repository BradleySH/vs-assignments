import React, {Component} from "react"
import HitList from "./HitList"

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name: [],
      image: [],
      targets: []
     }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => {
          this.setState({
            image: data[1].image,
            name: data[1].name
            // name: data,
            // image: data,
            // targets: [data]
 
          })
          console.log(data);
        })
        
  }


  render() { 
  
      const targetArray = this.state.targets.map((name, image) => <div>{this.state.name}{this.state.image}</div>)
    return ( 
      <div>

        <HitList  
            name={this.state.name} 
            image={this.state.image} 
        />
        {targetArray}
      </div>

     );
  }
}
 
export default App;