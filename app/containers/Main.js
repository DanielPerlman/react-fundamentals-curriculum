var React = require('react');
var MainContainer = require('./MainContainer');
var Header = require('./Header');
require('../main.css')

var Main = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <Header />
        {this.props.children}
      </MainContainer>
    )
  }
});

module.exports = Main;
