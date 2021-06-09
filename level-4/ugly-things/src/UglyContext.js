import React, {Component} from "react"
import axios from "axios"

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
    state = { 
        title: "",
        imgUrl: "",
        description: "", 
        imgArr: []
       }


    handleChange = (e) => {
         const {name, value} = e.target
         this.setState({
           [name]: value
         })
    
       }
    
    handleSubmit = (e) => {
         e.preventDefault()
         axios.post("https://api.vschool.io/bradhorlander/thing/", {
              
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
          
                
                
         })
            this.setState(prevState => ({
                imgArr: [...prevState.imgArr],
                title: "",
                imgUrl: "",
                description: ""
            }))
            //.get("https://api.vschool.io/bradhorlander/thing/")
         }
         
        
     
     componentDidMount(){
         axios.get("https://api.vschool.io/bradhorlander/thing/")
         .then(res => {
             this.setState({
                 imgArr: res.data
             })
             console.log(this.state.imgArr);
         })
     }

     handleDelete = (_id) => {
         console.log(_id);
         // delete request  works when I place the actual id number in but wont work with the temperate literal _id or id
         axios.delete(`https://api.vschool.io/bradhorlander/thing/${_id}`)
            .then(res => {
                console.log(res);
                console.log(res.data, "Delete is working");
                this.setState({ 
                    // title: "",
                    // imgUrl: "",
                    // description: "",
                    imgArr: this.state.imgArr.filter(item => item._id),


                 })
            })
            .catch(err => console.log(err))

     }

     handleEdit = (_id) => {
         //put request
         axios.put(`https://api.vschool.io/bradhorlander/thing/${_id}`)
            .then(res => {
                // .get  or turnary 
                this.setState({
                    title: "",
                    imgUrl: "",
                    description: ""
                })
            })
            .catch(err => console.log(err))

                //unknown how to edit
                // this.setState({ imgArr: this.imgArr.push(item => item???) })
            

     }


    render() { 
        return ( 
            <Provider value={{
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit,
                // postImage: this.postImage,
                imgArr: this.state.imgArr,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description
            }}>
                {this.props.children}
            </Provider>
         );
    }
}
 
export {UglyContextProvider, Consumer as UglyContextConsumer};
