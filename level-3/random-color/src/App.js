import React, {Component} from "react"

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
      .then(response => {
        this.setState({
          colorArray: response.data.color
        })
        console.log(response.data.color);
      })
}
handleClick(event){
  event.preventDefault()
  this.setState({
    colorArray: this.state.color
  })
}

  render() { 
    return ( 
      <div>
        <button onClick={this.handleClick}>Change Color</button>
      </div>

     );
  }
}
 
export default App;
