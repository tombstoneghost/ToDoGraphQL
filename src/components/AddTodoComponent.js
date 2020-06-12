import React, { useState } from 'react';
import { ADD_TODO, TODO } from './Queries';
import { Form, FormGroup } from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';
import { TextField, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

function AddTodoComponent({isPublic = false}) {
    const updateCache = (cache, {data}) => {
        if(isPublic) {
            return null;
        }

        const existingTodos = cache.readQuery({
            query: TODO
        });

        const newTodo = data.insert_TodoItems.returning[0];
        cache.writeQuery({
            query: TODO,
            data: { todos: [newTodo, ...existingTodos]}
        });
    };

    const [todoInput, setTodoInput] = useState('');

    const [addTodo] = useMutation(ADD_TODO, {update: updateCache});

    return (
        <div style={{flexDirection: 'row'}}>
            <Form 
                style={{
                marginTop: 25,
                marginBottom: 50, 
                textAlign: 'center'}}
                onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: {Task: todoInput}});
                }}>
                <FormGroup>
                    <TextField 
                        id="newTask" 
                        label="Add New Task" 
                        onChange={e => (setTodoInput(e.target.value))} 
                        value={todoInput} 
                        style={{marginLeft: 10, fontSize: 35}}/>
                    <IconButton 
                        type="submit" 
                        style={{marginLeft: 10}}
                        onClick={() => {
                            window.location.reload(true);
                        }}>
                            <AddCircleOutline style={{fontSize: 35, color: "red"}}/>
                    </IconButton>
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddTodoComponent;