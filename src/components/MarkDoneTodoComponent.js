import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bootstrap'
import {TOGGLE_TODO, TODO} from './Queries'

const Mark = (id) => {
  return (
    <Mutation mutation={TOGGLE_TODO}>
        {(markdone, { data }) => (
            <span data-toggle="tooltip" title="Delete Todo" onClick={e=> {markdone({ variables: id, refetchQueries: [{ query: TODO }] })}}>
                <Button type="submit" style={{marginLeft: 15}}>Mark Done</Button>
            </span>
        )}
    </Mutation>
  )
}

export default Mark;