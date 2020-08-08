import React, { Component, Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Menu.css";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";
import Items from "../../Items/Items";
import axios from "axios";
import Form from "../../form";
// import pizza from '../../assets/pizza.jpg'
// import { Card } from "@material-ui/core";

class Menu extends Component {
  state = {
    order: [],
  };
  componentDidMount() {
    axios
      .get("https://food-cart-18c7a.firebaseio.com/arr.json")
      .then((response) => {
        this.setState({ order: response.data });
      });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.items}>
          {this.state.order.map((card, key) => (
            <Items
              key={key}
              name={card.name}
              id={card.id}
              qty={card.qty}
              desc={card.desc}
              image={card.image}
              alt={card.alt}
              height={card.height}
              price={card.price}
              total={card.total}
            />
          ))}
        </div>
        <Form />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.contentReducer.arr,
  };
};

export default connect(mapStateToProps)(Menu);
