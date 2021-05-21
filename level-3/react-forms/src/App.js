import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = { 
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
     }
     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]: value })
      // [event.target.name]: event.target.value,[name]: value
  }
  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          value={this.state.firstName}
          placeholder="First Name" 
          onChange={this.handleChange} 
         />
        <br />
        <input 
          type="text" 
          name="lastName" 
          alue={this.state.lastName} 
          placeholder="Last Name" 
          onChange={this.handleChange} 
        />
        <br />

        <textarea value={"some default value"} 
        onChange={this.handleChange}
        />
        <br />


        <label>
        <input 
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        /> Is Friendly?
        </label>

        <br />

        <label>
        <input 
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        /> Male
        </label>
        <label>
        <input 
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        /> Female
        </label>

        <br />

<label>Favorite Color:</label>
        <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        <button>Submit</button>



      </form>
     );
  }
}
 
export default App;
