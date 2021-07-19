import React, {Component} from 'react'


import PostList from '../components/post-list/post-list.component';

class Blog extends Component {

    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({ posts: posts }))
      }

    render(){
        return (
            <>
                <PostList posts={this.state.posts} />
            </>
        )
    }
}

export default Blog
