import React from "react";
import { Card, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/SingleCardComponent.scss";

const SingleCard = ({ card: { name, text, type, imageUrl, set } }) => (
  <Card className="elder-card m-2 w-100 ">
    <CardImg top width="100%" src={imageUrl} alt={name} />
    <div className="text-left">
      <ListGroup flush>
        <ListGroupItem>
          <strong>Name:</strong> {name}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Text:</strong> {text}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Set Name:</strong> {set.name}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Type:</strong>: {type}
        </ListGroupItem>
      </ListGroup>
    </div>
  </Card>
);

export default SingleCard;
