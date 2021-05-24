import React, {Component} from "react"
import Badges from "./Badges"
import "./App.css"




class App extends Component {
  constructor() {
    super();
    this.state = {  //------ different states needed form the form looks like most text, number, email and textarea 
      firstName: "",
      lastName: "",
      email: "",
      birthLocation: "",
      phone: "",
      favFood: "",
      textarea: "",
      value: "",
      badgeEntries: []

      
     }
     //this.handleArray = this.handleArray.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)   //----- bind this for the submit key 
  }
  handleChange(event){
    event.preventDefault()
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    // this.setState(prevState => ({
    //   ...prevState,
    //   [event.target.state]: event.target.value
      

    // }))
    this.setState((prevState) => {
      return {
        firstName:"", 
      lastName: "",
      email: "",
      birthLocation: "",
      phone: "",
      favFood: "",
      textarea: "",
      value: "",
      badgeEntries: [...prevState.badgeEntries, {
        firstName: prevState.firstName,
        lastName: prevState.lastName,
        email: prevState.email,
        birthLocation: prevState.birthLocation,
        phone: prevState.phone,
        favFood: prevState.favFood,
        textarea: prevState.textarea,
        value: prevState.value}]
      }
    })

    // let badgeEntries = this.state.slice(0, 7)
    // badgeEntries.push(this.state)
    // this.setState((prevState) => {
    // return
    // {
    //   firstName:"", 
    //   lastName: "",
    //   email: "",
    //   birthLocation: "",
    //   phone: "",
    //   favFood: "",
    //   textarea: "",
    //   value: "",
    //   badgeEntries: [...prevState.badgeEntries, {
    //     firstName: prevState.firstName,
    //     lastName: prevState.lastName,
    //     email: prevState.email,
    //     birthLocation: prevState.birthLocation,
    //     phone: prevState.phone,
    //     favFood: prevState.favFood,
    //     textarea: prevState.textarea,
    //     value: prevState.value
    //   }]
    // }})

  }

  render() { 
    const mappedBadges = this.state.badgeEntries.map(badge => <Badges key={Math.random()*100} {...badge} />)
    //const newitems = item => {<Badges }
    return ( 
      <div className="form-container">
      <form onSubmit={this.handleSubmit} className="entry-form">
        <input 
            className="firstName"
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
            required
        />
        <br />
        <input 
            className="lastName"
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
            required
          />
          <br />
          <input 
              className="email"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
          />
          <br />
          <input 
              className="birthLocation"
              type="text"
              name="birthLocation"
              placeholder="Place of Birth"
              value={this.state.birthLocation}
              onChange={this.handleChange}
              required
          />
          <br />
          <input 
              className="phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              onChange={this.handleChange}
              required
          />
          <br />
          <input 
              className="fav-food"
              placeholder="Favorite Food"
              type="text"
              name="favFood"
              value={this.state.favFood}
              onChange={this.handleChange}
          />
          <textarea placeholder="Tell us about yourself" value={this.state.textarea} onChange={this.handleChange} name="textarea" />
          <button className="btn" type="submit" onSubmit={this.handleSubmit}>Submit</button>

      </form>
      <div className="submitted-container">
      <ol className="submitted-badges">
        <li>{<Badges 
                firstName={this.state.firstName} 
                lastName={this.state.lastName} 
                email={this.state.email} 
                birthLocation={this.state.birthLocation}
                phone={this.state.phone}
                favFood={this.state.favFood}
                textarea={this.state.textarea}
            />}
        </li>
        {mappedBadges}
      </ol>
      </div>
      </div>
     )
  }
}
 
export default App;
