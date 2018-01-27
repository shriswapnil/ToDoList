var React = require('react');
var createReactClass = require('create-react-class');
require('./css/todoitem.css');

var TodoItem = createReactClass({
  render: function(){
    return(
      <li className="todo-list">
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.delete}>X</span>
        </div>
      </li>
    );
  },
  delete: function(){
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
