import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

class Page1 extends Component {
    render() {
        return (
            <div>
            <Helmet>
                <title>Page 1</title>
                <meta name="description" content="This is page 1, contains links to google, yahoo, amazon" />
                <meta name="keywords" content="Page 1, google, yahoo, amazon" />
            </Helmet>
                <h1>This is page 1</h1>
                <p>Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness</p>

                <ul>
                    <li><a href="https://www.google.com/">google.com</a></li>
                    <li><a href="https://www.yahoo.com/">yahoo.com</a></li>
                    <li><a href="https://www.amazon.com/">amazon.com</a></li>
                </ul>    
                <hr/>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }
}

export default Page1;
