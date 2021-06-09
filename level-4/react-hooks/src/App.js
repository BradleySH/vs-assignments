



// takes the place of 3 lifecycle methods
//  componentDidMount
//  componentDidUpdate
//  componentWillUnmount

// hook that allows us to use side effects in a component
// network request
// manual DOM manipulation
//  Event Listeners or timeouts and intervals


// import React, {useState, useEffect} from "react"
// import randomcolor from "randomcolor"

// function App() {
//     const [count, setCount] = useState(0)
//     //const [answer, setAnswer] = useState("Yes")
//     const [color, setColor] = useState("")
    
//     // function increment() {
//     //     setCount(prevCount => prevCount + 1)
//     // }
    
//     // function decrement() {
//     //     setCount(prevCount => prevCount - 1)
//     // }

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCount(prevCount => prevCount + 1)
//         }, 1000)
//         return () => {
//             clearInterval(intervalId)
//         }
//     }, [])



//     useEffect(() => {
//         setColor(randomcolor())
//     }, [count]) // empty array would have it randomize once and wont change again.
    
//     return (
//         <div>
//             <h1>{count}</h1>
//             {/* <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button> */}
//         </div>
//     )
// }

// export default App









//--------------------------------------------------------------------------
// import React, {useState} from "react"

// function App() {
//     const [inputData, setInputData] = useState({firstName: "", lastName: ""})
//     const [contactsData, setContactsData] = useState([])
    
//     function handleChange(event) {
//         //update our inputData state
//         const {name, value } = event.target
//         setInputData(prevInputData => {  //prevState
//            return {
//                ...prevInputData,
//                [name]: value
//            }
//         })
        
//     }
    
//     function handleSubmit(event) {
//         //add the inputData to the contactData array
//         event.preventDefault()
//         setContactsData(prevContacts => [...prevContacts, inputData])
        
//     }

//     const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}> {contact.firstName} {contact.lastName}</h2>)
    
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     placeholder="First Name"
//                     name="firstName" 
//                     value={inputData.firstName}
//                     onChange={handleChange}
//                 />
//                 <input 
//                     placeholder="Last Name"
//                     name="lastName" 
//                     value={inputData.lastName}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <button>Add contact</button>
//             </form>
//             {contacts}
//         </>
//     )
// }

// export default App




//---------------------------------------------------------------------------
// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

// function App() {
//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount(prevCount => prevCount + 1)
//   }
//   function decrement() {
//     setCount(prevCount => prevCount - 1)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Incrememnt</button>
//       <button onClick={decrement}>Decrememnt</button>
//     </div>
//   )
// }
//--------------------------------------------------------------------------
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

