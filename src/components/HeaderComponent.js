import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <>
                <Jumbotron>
                    <div className="container">
                            <h1>To Do List</h1>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;