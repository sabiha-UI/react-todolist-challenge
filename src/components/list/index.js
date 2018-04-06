import React, { Component } from "react";

import './index.css';
import Button from '../button';

class List extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th width='66%'>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item</td>
                        <td>
                            <Button type='edit' onClick={''}>
                                Edit
                            </Button>
                            <Button type='delete' onClick={''}>
                                Delete
                            </Button> 
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        );
    }
}

export default List;
