import React, { Component } from 'react';
import {Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles= {
    pickuoSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

export default class PickupSavings extends Component{

    render(){
       const tooltip = (
                  <Tooltip>
                    <p>Picking up your order in the store helps cut costs, and we pass the saving on to you.</p>
                  </Tooltip>
       );
        return(
           <Row className="show-grid" >
            <Col md={6}>
                <OverlayTrigger placement="buttom" overlay={tooltip}>
                  <div style={styles.pickupSavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col style={styles.totalSavings} md={6}>
               {`$${this.props.price}`}
            </Col>
           </Row>

        )
    }
}