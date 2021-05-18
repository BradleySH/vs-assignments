
import React, {Component} from "react"
import Square from "./component/Square"

class App extends Component {
  state = {
      colors: ["white", "black","black","white"]
    }
  djSmall = () => {
      this.setState((prevState) => {
        return {
          colors: prevState.colors.map((color) => color !== "white" ? "white" : "black" )  ///if statement ? = if and : = else
        }
      })
    } 
  partyDJ = () => {
    this.setState((prevState) => {
      return {
        colors: prevState.colors.map((color, i) => i < 2 ? "purple" : color)
      }
    })
  }
  proDj = () => {
    this.setState((prevState) => {
      return {
        colors: prevState.colors.map((color, i) => i === 2 ? "red" || i === 3 : "blue")
      }
    })
  }
  bigTimeDj1 = () => {
    this.setState((prevState) => {
       return {
         colors: prevState.colors.map((color, i) => i === 0 ? "green" : color)
       }
    })
  }
  bigTimeDj2 = () => {
    this.setState((prevState) => {
       return {
         colors: prevState.colors.map((color, i) => i === 1 ? "cyan" : color)
       }
    })
  }
  bigTimeDj3 = () => {
    this.setState((prevState) => {
       return {
         colors: prevState.colors.map((color, i) => i === 2 ? "orange" : color)
       }
    })
  }
  bigTimeDj4 = () => {
    this.setState((prevState) => {
       return {
         colors: prevState.colors.map((color, i) => i === 3 ? "crimson" : color)
       }
    })
  }

  
  render() {
    const mappedSquares = this.state.colors.map((color) => <Square color={color} />)
    return (
        <div className="square-container">
          {mappedSquares}
          <button onClick={this.djSmall}>Small Time DJ</button>
          <button onClick ={this.partyDJ}>Party DJ</button>
          <button onClick ={this.proDj}>Pro DJ left</button>
          <button onClick={this.proDj}>Pro DJ right</button>
          <button className="big-dj1" onClick={this.bigTimeDj1}>Big Time DJ 1</button>
          <button className="big-dj2" onClick={this.bigTimeDj2}>Big Time DJ 2</button>
          <button className="big-dj3" onClick={this.bigTimeDj3}>Big Time DJ 3</button>
          <button className="big-dj4" onClick={this.bigTimeDj4}>Big Time DJ 4</button>

        </div>
    )
  }
}
export default App;
