import { gql } from 'apollo-boost';

export const TODO = gql`
    query {
        TodoItems {
        id
        Task
        }
    }`;

export const ADD_TODO = gql`
    mutation AddTodo($Task: String!) {
        insert_TodoItems(objects:[{Task:$Task}]){
            returning{
                id
            }
        }
    }`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: Int!) {
        delete_TodoItems(where: {id: {_eq: $id}}){
            affected_rows
        }
    }`;

export const TOGGLE_TODO = gql`
    mutation MarkDone($id: Int!) {
        update_TodoItems(
            where: {id: {_eq: $id}},
            _set: {
                done: true,  
            }
        ) {
            affected_rows
            returning {
                id 
            }
        }
    }`;
