import React, {Component} from 'react'

import SinglePost from '../components/single-post/single-post.components'

class BlogDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
            post: {},
            comments: [],
            user: {}
        }
    }

    componentDidMount(){
        const {blogId} = this.props.match.params
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(response => response.json())
        .then(post => {
            this.setState({post: post});

            if(post?.id)
            {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => this.setState({ comments: comments }))

                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => this.setState({ user: user }))

                this.setState({isLoaded: true});
            }
        });
    }

    render(){
        return (
            <>
            {(this.state.isLoaded) ? <SinglePost data={this.state} /> : (
                <div className="text-center w-100 h-100 flex justify-center items-center">
                    <h1>Loading...</h1>
                </div>
            )}
            </>
        );
    }
}

export default BlogDetails
