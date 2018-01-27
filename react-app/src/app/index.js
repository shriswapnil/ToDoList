var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Module requires
require('./css/todoitem.css');
var TodoItem  = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

import {Router, Route, browserHistory, Link} from 'react-router';


var App = createReactClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={TodoComponent}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
});



//Create a component
var TodoComponent = createReactClass({
    getInitialState: function(){
       return{

         todos: ['eat','ride','sleep','repe'],
         age: 27
       }

    },
    render: function(){

        var todolist = this.state.todos;
        todolist = todolist.map(function(item,index){
          return(<TodoItem item={item} key={index} onDelete={this.Delete}/>);

        }.bind(this));

        return(
            <div id="todo-list">
              <Link to={'/about'}>About</Link>
              <p>Swapnil list of work</p>
              <ul>
                {todolist}
              </ul>
              <AddItem onAdd={this.Add} />
            </div>
        );
    },
    Add: function(item){
      var updatedToDos = this.state.todos;
      updatedToDos.push(item);
      this.setState({
        todos: updatedToDos
      });
    },
    Delete: function(item){
      var updatedTodos = this.state.todos.filter(function(val, index){
           return item !== val;
       });
       this.setState({
         todos: updatedTodos
       });
    }
});



ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
