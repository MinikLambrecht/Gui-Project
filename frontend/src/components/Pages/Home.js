import React, { Component } from 'react';

var key = process.env.GOOGLE_API_KEY;

export default class Home extends Component {
    render() {
        return (
            <div>
                Home Component
               <h1>API Key: {process.env.NODE_ENV}</h1>
            </div>
        );
    }
}
