import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Typography } from '@material-ui/core';

class Header extends Component {

    render() {
        return(
            <>
                <Jumbotron>
                    <Typography variant="h1" component="h1" gutterBottom style={{fontWeight: "bolder", color: "#fff"}}>To Do List</Typography>
                </Jumbotron>
            </>
        );
    }
}

export default Header;