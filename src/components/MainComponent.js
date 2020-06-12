import React, { Component } from 'react';
import Header from './HeaderComponent';
import TodoList from './TodoComponent';
import 'fontsource-roboto';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <TodoList />
            </>
        );
    }
}

export default Main;