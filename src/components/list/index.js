import React, { Component } from 'react';

import './index.css';
import Button from '../button';

class List extends Component {
  edit = item => {
    this.props.edit(item);
  };

  delete = item => {
    this.props.delete(item);
  };

  renderItems = items => {
    return items.map(item => (
      <tr key={item._id}>
        <td>{item.text}</td>
        <td>
          <Button type="edit" onClick={() => this.edit(item)}>
            Edit
          </Button>
          <Button type="delete" onClick={() => this.delete(item)}>
            Delete
          </Button>
        </td>
      </tr>
    ));
  };

  render() {
    const { error, items } = this.props;

    const tableHeader = (
      <thead>
        <tr>
          <th width="66%">Item</th>
          <th>Actions</th>
        </tr>
      </thead>
    );

    const tableBody = <tbody>{this.renderItems(items)}</tbody>;

    if (error && !items.length) {
      return (
        <div>
          <table>
            {tableHeader}
            {tableBody}
          </table>
          <p style={{ textAlign: 'center' }}>Error while fetching items..!</p>
        </div>
      );
    }

    return (
      <table>
        {tableHeader}
        {tableBody}
      </table>
    );
  }
}

export default List;
