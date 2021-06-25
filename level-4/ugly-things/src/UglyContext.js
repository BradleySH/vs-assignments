import React, {Component} from "react"
import axios from "axios"

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
    state = { 
        title: "",
        imgUrl: "",
        description: "",
        isEditing: true, 
        updateEdit: "",
        editTitle: "",
        editImgUrl: "",
        editDescription: "",
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
                 imgArr: res.data.map(item => {return {...item, isEditing: false}})
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

     submitEdit = (e, _id, post) => {
         e.preventDefault()
         //put request
         console.log("Submitted edits!")
         axios.put(`https://api.vschool.io/bradhorlander/thing/${_id}`, post)
            .then(res => {
                // .get  or turnary 
                this.setState(prevState => {
                    const newImgArr = prevState.imgArr.map(item => item._id === _id ? {...post, isEditing: false} : item)
                    console.log(newImgArr);
                    return {
                        imgArr: newImgArr
            
                    }
                })
            })
            .catch(err => console.log(err))

                // unknown how to edit
                // this.setState({ imgArr: this.imgArr.push(item => item???) })
     }
     


     takeToEdit = (_id) => {
            // e.preventDefault()
            // const newUglyThing= {
            //     "title": this.state.title,
            //     "description": this.state.description,
            //     "imgUrl": this.state.imgUrl
            // }
            // this.setState({
            //     isEditing: false
            // })
            let selectedUglyThing = this.state.imgArr.find(item => item._id === _id)
            console.log(_id)
            console.log(selectedUglyThing)
            selectedUglyThing.isEditing = true
            let newImgArr = this.state.imgArr.map( item => item._id === selectedUglyThing._id? selectedUglyThing: item )
            this.setState({imgArr: newImgArr})
            console.log("Switched to Editing Mode!")
     }


    render() { 
        return ( 
            <Provider value={{
                handleDelete: this.handleDelete,
                submitEdit: this.submitEdit,
                // postImage: this.postImage,
                imgArr: this.state.imgArr,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                takeToEdit: this.takeToEdit,
                editTitle: this.state.editTitle,
                editImgUrl: this.state.editImgUrl,
                editDescription: this.state.editDescription
            }}>
                {this.props.children}
            </Provider>
         );
    }
}
 
export {UglyContextProvider, Consumer as UglyContextConsumer};
