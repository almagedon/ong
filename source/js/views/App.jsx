import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Footer from 'components/global/Footer';
import Home from 'views/Home';
import People from 'views/People';
import About from 'views/About';
import NotFound from 'views/NotFound';


class App extends Component {
  render() {
    return (
      <div className='App row'>
        <Menu />

        <div className='Page col-sm-12'>
          <Switch>
            <Route exact path={ routeCodes.HOME } component={ Home } />
            <Route path={ routeCodes.PEOPLE } component={ People } />
            <Route path={ routeCodes.ABOUT } component={ About } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);
