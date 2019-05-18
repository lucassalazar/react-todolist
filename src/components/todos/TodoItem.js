import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            color: '#fff',
            backgroundColor: '#0007',
            padding: '10px',
            borderBottom: '3px #06153055 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props.todo)
    // }

    render() {
        const { title, id, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' checked={completed} onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { title }
                    <button onClick={ this.props.deleteTodo.bind(this, id) } style={ btnStyle }>X</button>
                </p>
            </div>
        );
    }
}

// Proptypes - É uma boa prática faze-los
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#f009',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
