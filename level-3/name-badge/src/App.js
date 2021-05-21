import React, {Component} from "react"

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name: "",
      newNames: []
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({name: event.target.value})

  }
  handleSubmit(event){
    event.preventDefault()
    this.setState(prevState => {
      return {
        newNames: [...prevState.newNames,{name: prevState.name}]
      }
    })
    return(
      this.state.value
    )
  }
  render() { 
    const updateArray = this.state.newNames.map(nameObj => <li>{nameObj.name}</li>)
    return ( 
      <div className="App">
      <h1>Name Badge</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
      <div className="new-names">
        <ol className="added-name" name="list" >
          {updateArray}
        </ol>
      </div>
    </div>
     );
  }
}
 
export default App;
