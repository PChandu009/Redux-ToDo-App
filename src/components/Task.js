import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, isChecked } from '../actions'


class Task extends Component {
    render() {
        console.log("props", this.props)
        return (
            <tr>
                <td>
                    <input type="checkbox" checked={this.props.task.isDone} onClick={() => this.props.isChecked(this.props.taskid)} />
                </td>
                <td className={this.props.task.isDone ? "taskDone" : ""}> {this.props.task.data}
                </td>
                <td>
                    <button onClick={() => { this.props.deleteTask(this.props.taskid) }}> Delete </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        check: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask, isChecked }, dispatch)
    //deleteTask will be binded to the state to Task as we are connecting actions and Task below in connect.
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)