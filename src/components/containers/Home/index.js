import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home page" />
                    <meta name="keywords" content="home page,react app" />
                </Helmet>
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
