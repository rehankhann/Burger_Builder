import React, {Component} from 'react';

import './Post.css';

class post extends Component{
    componentWillReceiveProps (nextProps){
        console.log(nextProps + 'componentWillReceiveProps inside Post');
    }
    render(){
        return(
            <article className="Post" onClick={this.props.SelectPost}>
            <h1>{this.props.Title}</h1>
            <div className="Info">
                <div className="Author">{this.props.author}</div>
            </div>
            </article>
        )
    }
}

/*const post = (props) => (

);*/

export default post;