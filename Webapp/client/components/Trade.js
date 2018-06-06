import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import {Col, Grid, Row} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import * as vendorActions from '../actions/VendorActions';


class Trade extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sellQuantities: {},
      buyQuantities: {}
    }
  }

  get styles() {
    return {
      logo: {
        margin: '14px 10px 0 -8px'
      }
    }
  };

  handleSellQuantityChange(fruitId, quantity) {
    let sellQuantities = this.state.sellQuantities;
    sellQuantities[fruitId] = quantity;
    this.setState({sellQuantities})
  }

  handleBuyQuantityChange(fruitId, quantity) {
    let buyQuantities = this.state.buyQuantities;
    buyQuantities[fruitId] = quantity;
    this.setState({buyQuantities})
  }


  handleBuyFruits(fruitId) {
    this.props.actions.buyFruitsRequest(this.props.vendor.data.id, fruitId, this.state.buyQuantities[fruitId])
  }

  handleSellFruits(fruitId) {
    this.props.actions.sellFruitsRequest(this.props.vendor.data.id, fruitId, this.state.sellQuantities[fruitId])
  }

  renderFruit(vendorFruit, index) {
    let {fruit, quantity} = vendorFruit;
    return (
      <Row style={{marginTop: 30}} key={`fruit_trade_${index}`}>
        <Col xs={2}>
          <div style={{padding: 15}}>
            {fruit.name}
          </div>
        </Col>
        <Col xs={3}>
          <Row>
            <TextField
              style={{width: 100}}
              hintText="Quantity"
              onChange={(event, quantity) => this.handleSellQuantityChange(fruit.id, quantity)}
            />
            <RaisedButton label={"Sell"} primary={true} style={{marginLeft: 15, boxShadow: 'unset'}} onClick={() => this.handleSellFruits(fruit.id)}/>
          </Row>
        </Col>
        <Col xs={3}>
          <Row>
            <TextField
              style={{width: 100}}
              hintText="Quantity"
              onChange={(event, quantity) => this.handleBuyQuantityChange(fruit.id, quantity)}
            />
            <RaisedButton label={"Buy"} primary={true} style={{marginLeft: 15, boxShadow: 'unset'}} onClick={() => this.handleBuyFruits(fruit.id)}/>
          </Row>
        </Col>
        <Col xs={4}>
          <div style={{padding: 15}}>
            {`Current Quantity: ${quantity}`}
          </div>
        </Col>
      </Row>
    )
  }

  render() {
    if (this.props.vendor.data.vendorFruit.length == 0) {
      return <div style={{marginTop: 40}}>You are not selling any fruits right now.</div>
    }

    let fruits = this.props.vendor.data.vendorFruit.map((vendorFruit, index) => (this.renderFruit(vendorFruit, index)));
    return (
      <div style={{marginTop: 20}}>
        <span>You are currently selling the below fruits</span>
        <div>
          {fruits}
        </div>
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
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trade);