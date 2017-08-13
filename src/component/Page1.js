import Reflux from 'reflux'
import React, { Component } from 'react';

import AppStore from '../store/AppStore'

class Page1 extends Reflux.Component {
    constructor() {
        super();
        this.store = AppStore
    }
    render() {
        return (
            <div>
                <h3>Page 1 - Incrementing Count 1 => {this.state.count1}</h3>
            </div>
        );
    }
}

export default Page1;