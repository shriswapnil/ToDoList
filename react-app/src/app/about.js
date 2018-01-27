var React = require('react');
var createReactClass = require('create-react-class');

import {Link} from 'react-router';

var About = createReactClass({
  render: function(){
    return(
      <div>
        <Link to={'/'}>Home</Link>
        <p>Swapnils list</p>
      </div>
    );
  }
});

module.exports = About;
