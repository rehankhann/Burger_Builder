import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom'
import PostUrl from './post_page/post_page.js';
import Newpost from './NewPost/NewPost.js';
import Fullpost from './FullPost/FullPost'

import './Blog.css';

class Blog extends Component {

    state = {
        Today : 'Friday'
    }

    constructor(props){
        super(props)
        console.log('[Blog.js]_inside constructor', props );
    }

    componentWillMount(){
        console.log('ComponentWillMount inside Blog js');
    }

    componentDidMount(){
        console.log('ComponentDidMount inside Blog js');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate inside Blog.js')
        return true;
    }

    render () {
        console.log('Blog js Inside Render')
        return (
            <div>
                <ul className="top_vav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-post">New Post</Link></li>
                </ul>
                <Route path="/" exact component={PostUrl}/>
                <Route path="/post/:id" component={Fullpost}/>
                <Route path="/new-post" component={Newpost}/>
                
            </div>
        );
    }
}

export default Blog;