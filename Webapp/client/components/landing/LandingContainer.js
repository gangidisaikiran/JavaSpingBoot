import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Paper} from 'material-ui';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {overlayColor, brandColor} from 'Assets/theme/application.theme';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import * as vendorActions from '../../actions/VendorActions';
import Loader from 'halogenium/ScaleLoader';

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      showVendorQuestionnaire: false,
      form: {},
      selectedVendor: null
    };
  }

  componentWillMount() {
    this.props.actions.fetchVendorsRequest();
  }

  get styles() {
    return {
      logo: {
        margin: '14px 10px 0 -8px'
      },
      headerContainer: {
        height: '60vh',
        display: 'table',
      },
      heading: {
        textTransform: 'uppercase',
        fontSize: '4vmin',
        display: 'table-cell',
        verticalAlign: 'middle'
      }
    }
  };

  submitVendorForm() {
    this.props.actions.createVendorsRequest(this.state.form);
    this.setState({showVendorQuestionnaire: false});
  }

  cancelFormSubmission() {
    this.setState({showVendorQuestionnaire: false});
  }

  handleVendorSelection(value) {
    this.setState({value: this.props.vendor.vendorList[value].id});
    this.setState({selectedVendor: this.props.vendor.vendorList[value]});
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

  renderVendorQuestionnaire() {
    return (
      <Row center="xs">
        <div style={{textAlign: 'unset'}}>
          <TextField
            hintText="Vendor Name"
            floatingLabelText="Vendor Name"
            onChange={(event, name) => this.setState({form: {...this.state.form, name} })}
          />
          <br />
          <TextField
            floatingLabelText="Description"
            multiLine={true}
            rows={1}
            onChange={(event, description) => this.setState({form: {...this.state.form, description} })}
          /><br />
          <RaisedButton label={"Submit"} primary={true} onClick={() => this.submitVendorForm()}/>
          <RaisedButton label={"Cancel"} backgroundColor='#FF8A80' labelColor="#FFF" style={{marginLeft: 30}} onClick={() => this.cancelFormSubmission()}/>
        </div>
      </Row>
    )
  }

  renderExistingVendors() {
    const items = this.props.vendor.vendorList.map(vendor => <MenuItem value={vendor.id} key={`vendor_${vendor.id}`} primaryText={vendor.name} />)
    if (items.length > 0)
    {
      return (
        <SelectField
          value={this.state.value}
          onChange={(event, value) => this.handleVendorSelection(value)}
          maxHeight={200}
        >
          {items}
        </SelectField>
      );
    }
    return <div>No Existing vendors. Please Create a vendor to continue.</div>
  }

  renderMainContent() {
    return (
      <div>
        <Row center="xs">
          <Col>
            <RaisedButton label={"Add new Vendor"} primary={true} onClick={() => this.setState({showVendorQuestionnaire: true})}/>
          </Col>
          <Col style={{marginLeft: 30}}>
            {this.renderExistingVendors()}
          </Col>
        </Row>
        {this.state.showVendorQuestionnaire? this.renderVendorQuestionnaire(): null}
      </div>
    );
  }

  render() {

    return (
      <div>
        <Paper zDepth={0} style={{borderRadius: 0, backgroundColor: 'transparent'}}>
          <Grid>
            <div>
              <Card style={{minHeight: '80vh', padding: 30}}>
                <Col xs={12}>
                  {this.props.vendor.isLoading? this.renderLoader() :this.renderMainContent()}
                </Col>
              </Card>
            </div>
          </Grid>
        </Paper>
      </div>
    )
  }
}


function mapStateToProps(state) {
    return {
        vendor: state.vendor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
          ...vendorActions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);