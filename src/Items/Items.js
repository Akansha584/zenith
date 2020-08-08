import React from "react";
import classes from "./Items.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";

const Items = (props) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height={props.height}
          image={props.image}
          title={props.title}
          id={props.id}
          qty={props.qty}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
          <br />
          Price : {props.price}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            props.addToCart(
              props.id,
              props.qty,
              props.name,
              props.price,
              props.total,
              props.image
            );
          }}
        >
          <div>
            <React.Fragment>
              <Button
                size="small"
                color="primary"
                onClick={handleClick({ vertical: "top", horizontal: "right" })}
              >
                Add to Cart
              </Button>
            </React.Fragment>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message={`Item ${props.name} added to cart`}
              key={vertical + horizontal}
            />
          </div>
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => {
            props.removeFromCart(
              props.id,
              props.qty,
              props.name,
              props.price,
              props.total,
              props.image
            );
          }}
        >
          Remove From cart
        </Button>
      </CardActions>
    </Card>
  );
};

// const mapStateToProps = (state) => {
//   // debugger;
//   return {
//     el: state.counterReducer.count,
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, qty, name, price, total, image) =>
    dispatch({
      type: "INCREMENT_COUNTER",
      id: id,
      qty: qty,
      name: name,
      price: price,
      total: total,
      image: image,
    }),
  removeFromCart: (id, qty, name, price, total, image) =>
    dispatch({
      type: "DECREMENT_COUNTER",
      id: id,
      qty: qty,
      name: name,
      price: price,
      total: total,
      image: image,
    }),
});

export default connect(null, mapDispatchToProps)(Items);
