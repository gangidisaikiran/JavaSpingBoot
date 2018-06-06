import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
  import {Col, Grid, Row} from 'react-flexbox-grid';
import * as vendorActions from '../actions/VendorActions';
import TradeIcon from 'material-ui/svg-icons/action/shopping-basket';
import ManageIcon from 'material-ui/svg-icons/action/settings';
import Loader from 'halogenium/ScaleLoader';
import {Menu, MenuItem, Avatar} from 'material-ui';
import {Card, CardTitle} from 'material-ui/Card';

import ManageVendor from './ManageVendor';
import Trade from './Trade';

class VendorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 'manage'
    }
  }

  componentWillMount() {
    this.props.actions.fetchSelectedVendorRequest(this.props.params.vendorId);
  }

  get styles() {
    return {
      menuIcon: {
        background: '#BCCB66',
        fill: 'white',
        padding: 12,
        marginLeft: -3,
        marginTop: 0
      }
    }
  };

  renderMenu() {
    return (
      <Menu autoWidth={false} onChange={(event, value) => this.setState({selectedMenu: value})} selectedMenuItemStyle={{backgroundColor: '#e8f7fe', color: '#000'}} value={this.state.selectedMenu}>
        <MenuItem style={{margin: "10px 0", minWidth: 200}} primaryText="Manage" value="manage" leftIcon={<ManageIcon  style={this.styles.menuIcon}/>} />
        <MenuItem style={{margin: "10px 0", minWidth: 200}} primaryText="Trade" value="trade" leftIcon={<TradeIcon style={this.styles.menuIcon}/>} />
      </Menu>
    );
  }

  renderSelectedMenu() {
    let selectedMenu = null;
    switch(this.state.selectedMenu) {
      case "manage": selectedMenu = <ManageVendor vendor={this.props.vendor} actions={this.props.actions}/>;
        break;
      case "trade": selectedMenu = <Trade vendor={this.props.vendor} actions={this.props.actions}/>
        break;
    }
    return selectedMenu;
  }

  renderMainContent() {
    if (!this.props.vendor.data) {
      return null;
    }
    const avatar = (
      <div style={{margin: 'auto', display: 'flex'}}>
        <Avatar size={100} style={{margin: 'auto', borderRadius: 0}} backgroundColor="#9275A2">
          {this.props.vendor.data.name[0]}
        </Avatar>
      </div>);
    return (
      <Grid>
        <Card style={{marginTop: 100, minHeight: '85vh'}}>
          <Row style={{padding: '20px 35px 80px 35px'}}>
            <Col xs={3}>
              {avatar}
              <CardTitle title={this.props.vendor.data.name} titleStyle={{fontSize: 20, textAlign: 'center'}}/>
              {this.renderMenu()}
            </Col>
            <Col xs={9}>
              {this.renderSelectedMenu()}
            </Col>
          </Row>
        </Card>
      </Grid>
    )
  }

  renderLoader() {
    return (
      <div style={{marginTop: '70px', marginBottom: '50px'}}>
        <Row center="xs">
          <Loader color="#126B6F" size="10px" margin="5px"/>
        </Row>
      </div>
    );
  }

  render() {
    return this.props.vendor.isLoading? this.renderLoader(): this.renderMainContent()
  }
}


function mapStateToProps(state) {
  return {
    vendor: state.vendor.selectedVendor
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...vendorActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorContainer);