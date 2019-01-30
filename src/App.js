import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      total: 100,
      PickupSavings: -3.8,
      taxes: 0,
      estimatedTotal: 0 
    }
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
          <PickupSavings price={this.state.PickupSavings} ></PickupSavings>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}></EstimatedTotal>
          <ItemDetails ></ItemDetails>
        </Grid>
      </div>
    );
  }
}

export default App;
