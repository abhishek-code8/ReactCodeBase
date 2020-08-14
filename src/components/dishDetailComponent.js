import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class dishDetail extends Component {
  state = {};
  render() {
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
    if (this.props.selectedDish == null) {
      return (
        <div className="row">
          <Card className="col-md-5 m-1">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          <Card className="col-md-5 m-1">
            <CardTitle>Comments</CardTitle>
            <CardBody>{commentsDish}</CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default dishDetail;
