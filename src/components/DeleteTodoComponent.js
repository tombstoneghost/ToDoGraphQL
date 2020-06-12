import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bootstrap';
import {DELETE_TODO, TODO} from './Queries'



const Delete = (id) => {
  return (
    <Mutation mutation={DELETE_TODO}>
        {(deltodo, { data }) => (
        <span data-toggle="tooltip" title="Delete Todo" onClick={e=> {deltodo({ variables: id, refetchQueries: [{ query: TODO }] })}}>
            <Button type="submit" style={{marginLeft: 15}}>Delete Task</Button>
        </span>
         )}
         </Mutation>
  )
}

export default Delete;