import React from 'react';
import { Mutation } from 'react-apollo';
import {DELETE_TODO, TODO} from './Queries'
import { IconButton } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';

const Delete = (id) => {
  return (
    <Mutation mutation={DELETE_TODO}>
        {(deltodo, { data }) => (
        <span data-toggle="tooltip" title="Delete Todo" onClick={e=> {deltodo({ variables: id, refetchQueries: [{ query: TODO }] })}}>
            <IconButton type="submit" style={{marginLeft: 15}}>
              <DeleteForeverOutlined style={{fontSize: 35, color: "red"}} />
            </IconButton>
        </span>
        )}
    </Mutation>
  )
}

export default Delete;