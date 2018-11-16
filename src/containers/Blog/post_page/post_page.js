import React , { Component } from 'react'
import {Link} from 'react-router-dom'
import Post from '../../../components/Post/Post'
import axios from 'axios'

class posturl extends Component{
    state = {
        post : [],
        selectpostid:null,
        //error:false
    }

    constructor(props){
        super(props)
        console.log('[Post_Page.js]_inside constructor', props );
    }

    componentWillMount(){
        console.log('ComponentWillMount inside Post_Page js');
    }

    componentDidMount(){
        console.log('ComponentDidMount inside Post_Page js');
        axios.get('/posts').then(response => {
            /* Transform Data */
            const slicepost = response.data.slice(0,4);
            const Updatedauthor = slicepost.map(oldpost => {
                return{
                    ...oldpost,
                    author:'khan'
                }
            });
            this.setState({post:Updatedauthor})
        }).catch(error => {
            console.log(error);
            //this.setState({error:true})
        });
    }

    shouldComponentUpdate(nextProps , nextState){
        console.log(nextProps , nextState + ' shouldComponentUpdate')
        return true;
    }
    
    componentWillUpdate(nextProps , nextState){
        console.log(nextProps , nextState + ' componentWillUpdate')
    }

    PostSelectHandler = (id) => {
        this.setState({
            selectpostid:id
        })
    }
    render(){
        console.log('Post_Page js Inside Render')
        //let postdetails = <p style={{textAlign:'center'}}>Something Went Wrong</p>
        /*if(this.state.error === false){
            debugger;
        }*/
        let postdetails = this.state.post.map(FetchPost => {
            return <Link to={'/post/' + FetchPost.id} key={FetchPost.id}>
                        <Post SelectPost={() => this.PostSelectHandler(FetchPost.id)} Title={FetchPost.title} author={FetchPost.author} />
                    </Link>
        }); 
        return(
            <section className="Posts">
                {postdetails}
            </section>
        )
    }
}

export default posturl;