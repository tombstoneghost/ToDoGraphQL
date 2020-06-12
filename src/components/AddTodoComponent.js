import React, { useState } from 'react';
import { ADD_TODO, TODO } from './Queries';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';

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
                textAlign: 'center'}}
                onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: {Task: todoInput}});
                }}>
                <FormGroup>
                    <Label htmlFor="newTask">New Task: </Label>
                    <Input 
                        type="text" 
                        name="newTask" 
                        id="newTask" 
                        style={{marginLeft: 10}}
                        value={todoInput}
                        onChange={e => (setTodoInput(e.target.value))}/>
                    <Button 
                        type="submit" 
                        style={{marginLeft: 10}}
                        onClick={() => {
                            window.location.reload(true);
                        }}>
                            Add Task
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddTodoComponent;