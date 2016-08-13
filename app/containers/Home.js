var React = require('react');
var WeatherPrompt = require('../components/WeatherPrompt');

var Home = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <h1>Enter a City and State</h1>
        <WeatherPrompt />
      </div>
    );
  }
});

module.exports = Home;
