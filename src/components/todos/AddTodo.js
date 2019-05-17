import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault(); // Previne que formulario tente submeter usando o método padrão
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  } 

  // Utilizando [e.target.name] em um formulário todas as inputs que forem alteradas, automaticamente irão mudar o estado do objeto state.
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
                type="text"
                name="title" // target = title
                style={{ flex: '10', padding: '10px', fontSize: '1rem' }}
                placeholder="Add To Do ..."
                value={ this.state.title }
                onChange={ this.onChange }
            />
            <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1', fontSize: '1rem'}}
            />
        </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
