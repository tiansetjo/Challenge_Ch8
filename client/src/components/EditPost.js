import React,{Component} from 'react';
import axios from 'axios'

export default class EditPost extends Component{

    constructor(props){
        super (props);
        this.state={
            username :"",
            email:"",
            experience:"",
            level:""
        }
    }

    handleInputChange=(e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit= (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const{username,email,experience,level} = this.state;

        const data ={
            username : username,
            email:email,
            experience:experience,
            level:level
        }
        console.log(data)

        axios.put(`/post/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Post Update Succesccfully")
                this.setState(
                    {
                        username :"",
                        email:"",
                        experience:"",
                        level:""
                    }
                )
            }
        })
    }


    componentDidMount (){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if (res.data.success) {
                this.setState({
                    username:res.data.post.username,
                    email:res.data.post.email,
                    experience:res.data.post.experience,
                    level:res.data.post.level
                })
                console.log(this.state.post)
            }
        })

    }

    render(){
        return (
            <div className ="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
                    <form className = "needs-validation" noValidate>
                        <div className ="form-group" style ={{marginBottom:'15px'}}>
                            <label style ={{marginBottom :'5px'}}>Username</label>
                            <input type="text" 
                            className ="form-control"
                            name = "username"
                            placeholder="Enter Username"
                            value = {this.state.username}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className ="form-group" style ={{marginBottom:'15px'}}>
                            <label style ={{marginBottom :'5px'}}>Email</label>
                            <input type="email" 
                            className ="form-control"
                            name = "email"
                            placeholder="Enter email"
                            value = {this.state.email}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className ="form-group" style ={{marginBottom:'15px'}}>
                            <label style ={{marginBottom :'5px'}}>Experience</label>
                            <input type="text" 
                            className ="form-control"
                            name = "experience"
                            placeholder="Enter Address"
                            value = {this.state.experience}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className ="form-group" style ={{marginBottom:'15px'}}>
                            <label style ={{marginBottom :'5px'}}>Level</label>
                            <input type="text" 
                            className ="form-control"
                            name = "level"
                            placeholder="Enter Level"
                            value = {this.state.level}
                            onChange={this.handleInputChange}/>
                        </div>

                        <button className ="btn btn-success" type ="submit" style ={{margin:'15px'}} onClick ={this.onSubmit}>
                            <i className = "far fa-check-square"></i>
                            &nbsp; Update
                        </button>


                    </form>

            </div>
    )
    }
}

