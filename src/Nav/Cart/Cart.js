import React, { Component, Fragment } from "react";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import classes from "./Cart.css";

class Cart extends Component {
  render() {
    if (this.props.el.length === 0) {
      return (
        <p className={classes.empty}>
          Hey , it feels so light! <br /> There's nothing in your cart. Let's
          add some items.
        </p>
      );
    }
    return (
      <div>
        <p className={classes.ycart}>
          <b>My Food Cart ({this.props.qtyTotal} items)</b>
        </p>
        {this.props.el.map((value, index) => {
          return (
            <div align="center">
              <div className={classes.items}>
                <div className={classes.card}>
                  <div>
                    <img src={value.image} className={classes.photo} />
                  </div>
                  <div className={classes.vertical} />
                  <div align="left">
                    Item : {value.name}
                    <br />
                    Quantity : {value.qty}
                    <br />
                    Sum : {value.total}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div align="center">
          <div className={classes.sum}>Cart Total : {this.props.sum}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return {
    ...state,
    qtyTotal: state.counterReducer.count.reduce(
      (acc, item) => acc + item.qty,
      0
    ),
    sum: state.counterReducer.count.reduce((acc, item) => acc + item.total, 0),
    el: state.counterReducer.count.filter((obj) => obj.qty !== 0),
  };
};

export default connect(mapStateToProps)(Cart);
