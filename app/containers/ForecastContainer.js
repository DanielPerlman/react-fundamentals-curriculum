var React = require('react');
var PropTypes = React.PropTypes;
var weatherHelpers = require('../utils/weatherHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    };
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.location)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.location)
  },
  makeRequest: function(location) {
    weatherHelpers.getForecast(location)
                  .then(function (data) {
                    this.setState({
                      isLoading: false,
                      forecast: data
                    });
                  }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        location={this.props.routeParams.location}
        isLoading={this.state.isLoading}
        forecast={this.state.forecast} />
    );
  }

});

module.exports = ForecastContainer;
