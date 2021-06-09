import React, {Component} from "react"
//import Box from "./Box"
import axios from "axios"


class App extends Component {
  constructor() {
    super();
    this.state = { 
      colorArray: []


     }
     this.handleClick = this.handleClick.bind(this)
  }

componentDidMount(){
  axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        this.setState({
          colorArray: res.data.new_color
        })

        console.log(res.data);
      })

}
 
handleClick(){
  //event.preventDefault()
  axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(res => {
    this.setState({
      colorArray: res.data.new_color
    })

    console.log(res.data);
  })
  
}

  render() { 
       
    console.log(this.state.colorArray);
    return ( 
      // <div className="container" style={{width: 250, height: 250, borderRadius: "50%", backgroundColor: this.state.colorArray}}>
      //   <Box style={this.state.colorArray}/>
      // </div>,
      <div>
        <button onClick={this.handleClick} style={{backgroundColor: `#${this.state.colorArray}`}}>Change Color</button>
      <div style={{backgroundColor: `#${this.state.colorArray}`, width: "200px", height: "200px" }}></div>
      </div>

     );
  }
}
 
export default App;
