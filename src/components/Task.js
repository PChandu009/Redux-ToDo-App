import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions'


class Task extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}> Delete </button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch)
    //deleteTask will be binded to the state to Task as we are connecting actions and Task below in connect.
}

export default connect(null,mapDispatchToProps)(Task)