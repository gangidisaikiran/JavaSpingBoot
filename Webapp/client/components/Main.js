import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../assets/theme/application.theme';
import Navbar from './Navbar';
import Snackbar from 'material-ui/Snackbar';

import * as commonActions from './../actions/CommonActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar/>
          <div style={{marginTop: 80}}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
          <Snackbar
            open={this.props.common.snackbar.open}
            message={this.props.common.snackbar.text}
            autoHideDuration={4000}
            onRequestClose={() => this.props.actions.closeSnackbar()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    common: state.common
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...commonActions,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
