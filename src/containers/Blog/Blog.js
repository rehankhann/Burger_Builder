import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        post : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            /* Transform Data */
            const slicepost = response.data.slice(0,4);
            const Updatedauthor = slicepost.map(oldpost => {
                return{
                    ...oldpost,
                    author:'khan'
                }
            });
            this.setState({post:Updatedauthor})
        });
    }

    render () {

        const postdetails = this.state.post.map(FetchPost => {
            return <Post key={FetchPost.id} Title={FetchPost.title} author={FetchPost.author} />
        }); 

        return (
            <div>
                <section className="Posts">
                {postdetails}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;