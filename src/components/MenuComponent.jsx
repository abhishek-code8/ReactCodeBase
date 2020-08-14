import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { dishDetail } from "./dishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  dishDetailComponent(dish) {
    if (dish != null) {
      const commentsDish = dish.comments.map((x) => {
        return (
          <React.Fragment>
            <CardText>{x.comment}</CardText>
            <CardText>
              -- {x.author}, {x.date}
            </CardText>
          </React.Fragment>
        );
      });
      return (
        <Card className="col-md-5 m-1">
          <CardTitle>Comments</CardTitle>
          <CardBody>{commentsDish}</CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card className="col-md-5 m-1">
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
          {this.dishDetailComponent(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
