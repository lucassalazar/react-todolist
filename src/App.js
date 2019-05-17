import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res =>
        this.setState({ todos: res.data.map(todo => {
          if(todo.completed === true) {
            todo.completed=false;  
          }
          return todo;
        })
      })
    );
  }

  // Toggle Completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) }));
  }

  // Add To Do
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return ( // JSX
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
