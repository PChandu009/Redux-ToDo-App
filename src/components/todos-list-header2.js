import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

class TodosListHeader extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th> Task </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => <Task key={index} task={task} />)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks:state.tasks
    }
}

//mapStateToProps will get state from the store

export default connect(mapStateToProps)(TodosListHeader);
