import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                Home Component
               <h1>{console.log(process.env)}</h1>
            </div>
        );
    }
}
