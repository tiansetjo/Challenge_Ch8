import React,{Component} from 'react';
import axios from "axios";

export default class PostDetail extends Component{
    constructor(props){
        super(props);

        this.state ={
            post : {}
        }

    }

    componentDidMount (){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if (res.data.success) {
                this.setState({
                    post:res.data.post
                })
                console.log(this.state.post)
            }
        })

    }
    render(){
        const {username,email, experience, level} = this.state.post;
        return (
            <div style ={{marginTop:"20px"}}>
                <h4>{username}</h4>
                <hr/>

                <dl className ="row">
                    <dt className = "col-sm-3">Username :</dt>
                    <dd className = "col-sm-9">{username}</dd>

                    <dt className = "col-sm-3">Email :</dt>
                    <dd className = "col-sm-9">{email}</dd>

                    <dt className = "col-sm-3">Experience :</dt>
                    <dd className = "col-sm-9">{experience}</dd>

                    <dt className = "col-sm-3">Level :</dt>
                    <dd className = "col-sm-9">{level}</dd>
                    
                </dl>

            </div>

    )
    }
}

