import React, { PureComponent } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import './index.css'

const hosts = [
  'Lara / Event1',
  'Robin / Event2',
  'Daniil / Event3',
  'Ha / Event4',
  'Tea / Event5',
  'Gabrijela / Event6'
];

/**
 * `AutoComplete` search text can be implemented as a controlled value,
 * where `searchText` is handled by state in the parent component.
 * This value is reset with the `onNewRequest` callback.
 */
export default class SearchHost extends PureComponent {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div className="Host">
        <AutoComplete
          className="Lala"
          hintText="Search host/event name"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={hosts}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}
