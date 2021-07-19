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
      ]
    }
  }



  render() {
    return (
      <BrowserRouter>
        <div>
          <SiteHeader navigation={this.state.navigation} />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={Blog} exact />
            <Route exact path={"/blog/:blogId"} component={BlogDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
