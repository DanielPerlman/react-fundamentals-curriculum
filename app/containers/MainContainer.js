var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
  return (
    <div style={{width:"100%", height:"92%"}}>
      {props.children}
    </div>
  );
};

module.exports = MainContainer;
