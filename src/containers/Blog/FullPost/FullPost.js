import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedpost:null
    }

    constructor(props){
        super(props)
        console.log('[Full_Post.js]_inside constructor', props );
    }

    componentWillMount(){
        console.log('ComponentWillMount inside Full_Post js');
    }

    componentDidMount(){
        console.log('componentDidMount inside Full_Post js');
        const currentpostid = this.props.match.params.id;
        if(currentpostid){
            if( this.state.loadedpost == null || (this.state.loadedpost && this.state.loadedpost.id !== currentpostid)){
                axios.get('/posts/' + currentpostid ).then(response => {
                    this.setState({loadedpost:response.data})
                });
            }
        }
    }

    DeletePost = () => {
        axios.delete('/posts/' + this.props.match.params.id).then(response=>{
            console.log(response);
        });
    }

    render () {
        console.log('Full_Post js Inside Render')
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.currentid){
            post = <p style={{textAlign:'center'}}>Loading</p>;
        }
        if(this.state.loadedpost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedpost.title}</h1>
                    <p>{this.state.loadedpost.body}</p>
                    <div className="Edit">
                        <button onClick={this.DeletePost} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;