import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to="/index">Go to Page 1</Link></li>
                    <li><Link to="/inner-page">Go to Page 2</Link></li>
                </ul>  
            </div>
        );
    }
}

export default Home;
