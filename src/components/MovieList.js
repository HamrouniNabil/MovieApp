import React from "react";
import Rate from "./Rate";
import { Card, CardGroup } from "react-bootstrap";

const MovieList = props => {
  let x = props.movie;
  return (
    <div className="Card row mt-2">
      {x
        .filter(
          e =>
            e.title.toLowerCase().includes(props.searchVal.toLowerCase()) &&
            e.rate >= props.rateVal
        )
        .map((e,key) => (
          <div className="col-md-4 mt-2" key ={key}>
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src={e.image}
                  className="image"
                  style={{ width: "100%" }}
                />
                <Card.Body>
                  <Card.Title className="Title">
                    <h3>{e.title}</h3>
                  </Card.Title>
                  <Card.Text>{e.categorie}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Rate starIndex={() => {}} rate={e.rate} />
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        ))}
    </div>
  );
};
export default MovieList;
