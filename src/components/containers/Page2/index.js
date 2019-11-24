import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

class Page2 extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Page 2</title>
                    <meta name="description" content="This is page 2, contains links to facebook, instagram, twitter" />
                    <meta name="keywords" content="page 2, facebook, instagram, twitter"/>
                </Helmet>
                <h1>This is page2</h1>
                <p>This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2</p>

                <ul>
                    <li><a href="https://www.facebook.com/">www.facebook.com</a></li>
                    <li><a href="https://www.instagram.com/">www.instagram.com</a></li>
                    <li><a href="https://www.twitter.com/">www.twitter.com</a></li>
                </ul>
                <hr/>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }
}

export default Page2;
