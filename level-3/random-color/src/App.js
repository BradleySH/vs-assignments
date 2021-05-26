import React, {Component} from "react"
import Box from "./Box"
import axios from "axios"
import "./style.css"


class App extends Component {
  constructor() {
    super();
    this.state = { 
      colorArray: []


     }
     //this.handleClick = this.handleClick.bind(this)
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
// handleClick(event){
//   event.preventDefault()
//   this.setState({
//     colorArray: this.state.color
//   })
// }

  render() { 
    console.log(this.state);
    return ( 
      <div>
        <Box />
      </div>,
        <button onClick={this.handleClick}>Change Color</button>

     );
  }
}
 
export default App;
