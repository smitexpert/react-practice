import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SiteHeader from './components/site-header/site-header.component'

import Home from './pages/Home';
import Blog from './pages/Blog';

import BlogDetails from './pages/BlogDetails';

class App extends Component {

  constructor() {
    super();

    this.state = {
      navigation: [
        {
          name: "Home",
          url: '/'
        },
        {
          name: 'Blog',
          url: '/blog'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ],
      posts: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts: posts }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <SiteHeader navigation={this.state.navigation} />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog" exact>
              <Blog posts={this.state.posts} />
            </Route>
            <Route path={"/blog/:blogId"}>
                <BlogDetails />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
