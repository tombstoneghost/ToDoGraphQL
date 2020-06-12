import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { TODO } from './Queries';
import AddTodoComponent from './AddTodoComponent';
import Mark from './MarkDoneTodoComponent';
import Delete from './DeleteTodoComponent';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';

function TodoList() {
    return( 
        <Query query={TODO}>
           {({loading, error, data}) => {
                if(loading)
                    return (
                        <p>Loading . . .</p>
                    );
                if(error)
                    return console.log(error);
                return (
                    <TableContainer>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{width: "40%"}}><Typography variant="h5" component="h5">Task</Typography></TableCell>
                                    <TableCell align="left"><Typography variant="h5" component="h5">Mark Done</Typography></TableCell>
                                    <TableCell align="left"><Typography variant="h5" component="h5">Delete</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.TodoItems.map(item => (
                                    <TableRow key={item.id} 
                                        style={{
                                        display: "flex", 
                                        flexDirection: "row"}}>
                                        <TableCell align="right"><Typography variant="h5" component="h5">{item.Task}</Typography></TableCell>
                                        <TableCell align="right"><Mark id={item.id}/></TableCell>
                                        <TableCell align="right"><Delete id={item.id}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                );
            }}
        </Query>
    );
}

class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            task:''
        };
    }

    render() {
        return(
            <div className="container">
                <div className="container" style={{marginLeft: "20%", marginRight:"10%", fontSize: 35}}>
                    <TodoList />
                </div>
                <div>
                    <AddTodoComponent />
                </div>
            </div>
        );
    }
}

export default TodoApp;