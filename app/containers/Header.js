var React = require('react');
var PropTypes = React.PropTypes;
var WeatherPrompt = require('../components/WeatherPrompt');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h2>Weather App</h2>
        <WeatherPrompt
          isInline=" inline"/>
      </div>
    );
  }

});

module.exports = Header;
