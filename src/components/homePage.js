"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbutron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra-reponsive web app.</p>
            </div>
        );
    }
});

module.exports = Home;