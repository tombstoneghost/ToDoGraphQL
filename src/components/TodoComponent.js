import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { TODO } from './Queries';
import AddTodoComponent from './AddTodoComponent';
import Mark from './MarkDoneTodoComponent';
import Delete from './DeleteTodoComponent';

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
                    <ul>
                        {data.TodoItems.map(item => (
                            <span key={item.id} style={{display: "flex", flexDirection: "row", padding: 5, margin: 10}}>{item.Task}<Delete id={item.id}/><Mark id={item.id}/></span>
                        ))}
                    </ul>
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
                <div className="container" style={{marginTop: 25, marginLeft: "20%"}}>
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