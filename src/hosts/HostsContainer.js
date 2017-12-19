import React, { PureComponent } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux'
import './index.css'
// import hosts from '../reducers/hosts'

/**
 * `AutoComplete` search text can be implemented as a controlled value,
 * where `searchText` is handled by state in the parent component.
 * This value is reset with the `onNewRequest` callback.
 */
 const hosts = [
   'Lara / Meeting1',
   'Robin / Meeting2',
   'Daniil / Meeting3',
   'Ha / Meeting4',
   'Tea / Meeting5',
   'Gabrijela / Meeting6'
 ];

class HostsContainer extends PureComponent {
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
          hintText="Search host/meeting name"
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

const mapStateToProps = ({ hosts }) => ({
  hosts
})

export default connect(mapStateToProps)(HostsContainer)
