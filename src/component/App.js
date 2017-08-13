import React, { Component } from 'react';
import Reflux from 'reflux'
import '../css/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Actions from '../actions/Actions'
import AppStore from '../store/AppStore'
import {withRouter} from 'react-router'


class App extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = AppStore
        this.handlePage1 = this.handlePage1.bind(this);
        this.handlePage2 = this.handlePage2.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handlePage1 = () => {
        Actions.pageOneLoad()
    }
    handlePage2 = () => {
        Actions.pageTwoLoad()
    }
    handleReset = () => {
        Actions.reset()
    }



  render() {

    return (
        <div>
            <Router>
                <div>
                    <h3>React ReFlux Demo</h3>
                    <ul>
                        <li><Link to="/" onClick={this.handleReset}>Reset</Link></li>
                        <li><Link to="/page1" onClick={this.handlePage1}>Page 1</Link></li>
                        <li><Link to="/page2" onClick={this.handlePage2}>Page 2</Link></li>
                    </ul>

                    <hr/>
                    
                    <Route  path="/" component={HomeLoad}/>
                    <Route path="/page1" component={Page1Load}/>
                    <Route path="/page2" component={Page2Load}/>
                </div>
            </Router>
        </div>
    );
  }
}

const HomeLoad = () => (
    <div>
        <Home />

    </div>
)

const Page1Load = () => (

    <div>
        <Page1 />
    </div>
)

const Page2Load = () => (
    <div>
        <Page2 />
    </div>
)

export default withRouter(App);
