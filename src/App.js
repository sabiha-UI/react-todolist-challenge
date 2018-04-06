import React, { Component } from 'react';

import './App.css';

import List from './components/list';
import Input from './components/input';
import Button from './components/button';

class App extends Component {

    render() {
        return (
            <div className="container">

                <h1>Todo List</h1>
                
                <div className='add-item-to-list'>
                    <Input
                        name='item'
                        placeholder='New Item...'
                        onChange={''}
                    />
                    <Button onClick={''} type='add'>
                      Add
                    </Button>
                </div>

                <List />
            </div>
        );
    }
}

export default App;
