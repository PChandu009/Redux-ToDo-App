import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions'

class CreateTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter new todo task" ref="task" />
                <button onClick={() => this.props.addTask(this.refs.task.value)}>Create new</button>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
    //addTask will be binded to the state to CreateTodo as we are connecting actions and CreateTodo below in connect.
}

export default connect(null, mapDispatchToProps)(CreateTodo);

//connect will have two functions: dispatcher and a propsbinding function to this component CreateTodo