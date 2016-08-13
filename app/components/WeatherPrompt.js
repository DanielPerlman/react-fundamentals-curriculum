var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var weatherHelpers = require('../utils/weatherHelpers');

var WeatherPrompt = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  propTypes: {
    isInline: PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      isInline: ''
    };
  },
  getInitialState: function() {
    return {
      location: ''
    };
  },
  handleLocation: function (e) {
    this.context.router.push('/forecast/' + this.state.location);
  },
  onLocationChange: function (e) {
    this.setState({
      location: e.target.value
    });
  },
  render: function() {
    return (
      <div className={"weather-prompt" + this.props.isInline}>
        <input type="text" className="form-control" onChange={this.onLocationChange} value={this.state.location} placeholder="St. George, Utah" />
        <button type="button" className="btn btn-success space" onClick={this.handleLocation} >Get Weather</button>
      </div>
    );
  }

});

module.exports = WeatherPrompt;
