import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import { actions } from './actions';
import List from './components/list';
import Input from './components/input';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
    this.textInput = React.createRef();
  }

  onTextInput = ref => {
    this._textInput = ref;
  };

  cancel = () => {
    if (this.state.editing) {
      this.setState({ editing: false });
      this.props.resetCurrentItem();
    }
  };

  onChange = value => {
    this.props.onTextChange(value);
  };

  add = () => {
    if (this.props.toDoApp.currentItem.text) {
      this.props.add(this.props.toDoApp.currentItem);
      // clear the text
      // this.props.resetCurrentItem();
    }
  };

  update = () => {
    if (this.props.toDoApp.currentItem.text) {
      this.props.edit(this.props.toDoApp.currentItem);
      // clear the text
      // this.props.resetCurrentItem();
      this.setState({ editing: false });
    }
  };

  edit = item => {
    this.textInput.current.focus();
    this.props.setCurrentItem(item);
    this.setState({ editing: true });
  };

  delete = item => {
    this.props.delete(item);
  };

  componentWillMount() {
    console.log('Mounting...');
    this.props.fetchItems();
  }

  render() {
    const { toDoApp } = this.props;

    return (
      <div className="container">
        <h1>Todo List</h1>
        <div className="add-item-to-list">
          <Input
            reference={this.textInput}
            name="item"
            placeholder="New Item..."
            value={this.props.toDoApp.currentItem.text}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <Button
            onClick={this.state.editing ? this.update : this.add}
            type={this.state.editing ? 'edit' : 'add'}
          >
            {this.state.editing ? 'update' : 'add'}
          </Button>
          {this.state.editing && (
            <Button onClick={this.cancel} type="delete">
              cancel
            </Button>
          )}
        </div>

        <List
          error={toDoApp.errorWhileFetchingItems}
          items={toDoApp.items}
          edit={this.edit}
          delete={this.delete}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toDoApp: state.list,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      resetCurrentItem: actions.resetCurrentItem,
      setCurrentItem: actions.setCurrentItem,
      onTextChange: actions.onTextChange,
      fetchItems: actions.fetchListItems,
      add: actions.addListItem,
      edit: actions.editListItem,
      delete: actions.deleteListItem,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
