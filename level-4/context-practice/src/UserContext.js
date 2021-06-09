import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
    state = { 
        username: "Larry"
     }
     changeUsername = (username) => {
         this.setState({username})
     }
    render() { 
        const {username} = this.state
        return ( 
            <Provider value={{username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
         );
    }
}
 
export {UserContextProvider, Consumer as UserContextConsumer};
