import React, { Component } from 'react';
import Reflux from 'reflux'
import AppStore from '../store/AppStore'

class Page2 extends Reflux.Component {
    constructor() {
        super();
        this.store = AppStore
    }
    render() {
        return (
            <div>
                <h3>Page 2 - Incrementing Count 2 => {this.state.count2}</h3>
            </div>
        );
    }
}

export default Page2;