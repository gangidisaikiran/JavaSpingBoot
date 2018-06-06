import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import * as vendorActions from '../actions/VendorActions';
import * as fruitActions from '../actions/FruitActions';
import {Col, Grid, Row} from 'react-flexbox-grid';

class ManageVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      selectedFruits: []
    }
  }

  componentWillMount() {
    this.props.actions.fetchFruitsRequest();
  }

  get styles() {
    return {
    }
  };

  submitFruitForm() {
    this.props.actions.createFruitRequest(this.state.form);
  }

  toggleFruitSelection(fruitId, isChecked) {
    if (isChecked) {
      if(this.state.selectedFruits.indexOf(fruitId) == -1) {
        this.setState({selectedFruits: [...this.state.selectedFruits, fruitId]});
      }
    }
    else {
      let selectedFruits = this.state.selectedFruits.filter(selectedFruitId => selectedFruitId != fruitId);
      this.setState({selectedFruits});
    }
  }

  handleAddFruitsToVendor() {
    let form = this.state.selectedFruits.map(fruitId => ({quantity: 0, fruit: {id: fruitId}}));
    this.props.actions.addFruitsToVendorRequest(this.props.vendor.data.id, form);
  }

  renderSellingFruits() {
    if (this.props.vendor.data.vendorFruit.length == 0) {
      return <div style={{marginTop: 40}}>You are not selling any fruits right now.</div>
    }

    let fruits = this.props.vendor.data.vendorFruit.map((vendorFruit, index) => (<ListItem key={`vendorFruit_${index}`} primaryText={vendorFruit.fruit.name}/>));
    return (
      <div style={{marginTop: 20}}>
        <span>You are currently selling the below fruits</span>
        <List>
          {fruits}
        </List>
      </div>
    );
  }

  renderExistingFruits() {
    if (!this.props.fruits.fruitList || this.props.fruits.fruitList.length == 0) {
      return null;
    }
    let sellingFruits = this.props.vendor.data.vendorFruit.map(vendorFruit => vendorFruit.fruit.id);
    let remainingFruits = this.props.fruits.fruitList.filter(fruit => sellingFruits.indexOf(fruit.id) == -1);

    if (remainingFruits.length == 0) {
      return null;
    }

    let fruitCheckBoxes = remainingFruits.map(fruit =>
      <Checkbox label={fruit.name} key={`add_fruit_${fruit.id}`} onCheck={(event, isChecked) => this.toggleFruitSelection(fruit.id, isChecked)}/>
    );
    return (
      <div style={{marginTop: 20}}>
        {fruitCheckBoxes}
        <RaisedButton label={"Sell selected Fruits"} primary={true} style={{marginLeft: 15}} onClick={() => this.handleAddFruitsToVendor()}/>
      </div>
    )
  }

  renderFruitQuestionnaire() {
    return (
      <Row>
        <div style={{textAlign: 'unset'}}>
          <TextField
            hintText="Fruit Name"
            floatingLabelText="Fruit Name"
            onChange={(event, name) => this.setState({form: {...this.state.form, name} })}
          />
          <RaisedButton label={"Add"} primary={true} style={{marginLeft: 15}} onClick={() => this.submitFruitForm()}/>
        </div>
      </Row>
    )
  }

  renderFruitContainer() {
    return (
      <div>
        {this.renderFruitQuestionnaire()}
        {this.renderExistingFruits()}
      </div>
      )
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={5}>
            {this.renderSellingFruits()}
          </Col>
          <Col xs={7}>
            {this.renderFruitContainer()}
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vendor: state.vendor.selectedVendor,
    fruits: state.fruits
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...vendorActions,
      ...fruitActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVendor);
