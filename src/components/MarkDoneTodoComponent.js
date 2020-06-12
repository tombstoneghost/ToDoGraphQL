import React from 'react';
import { Mutation } from 'react-apollo';
import {TOGGLE_TODO, TODO} from './Queries'
import { IconButton } from '@material-ui/core';
import { DoneOutlineRounded } from '@material-ui/icons';

const Mark = (id) => {
  return (
    <Mutation mutation={TOGGLE_TODO}>
        {(markdone, { data }) => (
            <span data-toggle="tooltip" title="Mark Done" onClick={e=> {markdone({ variables: id, refetchQueries: [{ query: TODO }] })}}>
                <IconButton type="submit" style={{marginLeft: 15}}>
                    <DoneOutlineRounded style={{fontSize: 35, color: "green"}}/>
                </IconButton>
            </span>
        )}
    </Mutation>
  )
}

export default Mark;