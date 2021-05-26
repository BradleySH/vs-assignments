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
             image: data[0].image,
             name: data[0].name,
              // name: data.name,
              // image: data.image,
             targets: [data]
 
          })
          console.log(data);
        })
        
      }
    toBeWhacked(){
      const whacked = [];
      for(let i= 0; i < this.state.targets.length; i++){
        let image = `${this.state.targets[i].image}`
        let name = `${this.state.targets[i].name}`
        whacked.push(<HitList image={image} name={name}/>)
      }
      return whacked
    }
  


  render() { 
    console.log(this.state)
      const targetArray = this.state.targets.map(item => <HitList name={this.state.name} image={this.state.image}{...item}/>)
      console.log(targetArray)
    return (
      <div>
        {this.toBeWhacked()}
      </div>,
      <div>
        <HitList  
            name={this.state.name} 
            image={this.state.image} 
        />
      </div>
      // <div>{targetArray}</div>

     );
  }
}
 
export default App;