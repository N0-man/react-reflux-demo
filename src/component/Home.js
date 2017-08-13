import Reflux from 'reflux'
import React, { Component } from 'react';
import AppStore from '../store/AppStore'

class Home extends Reflux.Component {
    constructor() {
        super();
        this.store = AppStore
    }
    render() {
        return (
            <div>
                <h2>Reflux Store</h2>
                <h3>Count 1:{ this.state.count1 }!</h3>
                <h3>Count 2:{ this.state.count2 }!</h3>
            </div>
        );
    }
}

export default Home;