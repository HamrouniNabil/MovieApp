import React from "react";
import Rate from "./Rate";
import { Card, CardGroup } from "react-bootstrap";
import WithLoading from './WithLoading'
const MovieList = props => {
  let x = props.movie;
  return (
    <div className="Card row mt-2">
      {x
        .filter(
          e =>
           ( e.title.toUpperCase().includes(props.searchVal.toUpperCase().trim()) ||
            e.categorie.toUpperCase().includes(props.searchVal.toUpperCase().trim()))&&
            e.rate >= props.rateVal
        )
        .map((e,key) => (
          <div className="col-md-4 mt-4" key ={key}>
            <CardGroup>
            <Card bg="info" text="white" style={{ width: '18rem' }} className="radius">
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
                  <div className="edit">
                  <small className="text-muted">Last updated 3 mins ago</small>
                  <div className="Modal">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          value={e.id}
        >
          Edit
        </button>

        <div 
          className="modal fade"
          id="2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" >
                 Modifie Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Movie Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Please Insert the title"
                      className="form-control"
                      id={e.id}
                      value ={e.title}
                      
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Movie Image</label>
                    <input
                      type="text"
                      name="image"
                      placeholder="Please Insert the link"
                      className="form-control"
                      id={e.id}
                      value={e.image}
                      
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categorie">Movie Categorie</label>
                    <select
                      type="text"
                      name="categorie"
                      className="form-control"
                      id={e.id}
                      value={e.categorie}
                      
                    ><option selected>{e.categorie}</option>
                      <option>Film d'Action</option>
                    <option>Film de science-fiction</option>
                    <option>Film d'Aventure</option>
                    <option>Film Dramatique</option>
                    <option>Film D'horreur</option>
                    
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rate">Movie Rate</label>
                    <input
                      type="number"
                      name="rate"
                      className="form-control"
                      id={e.id}
                      min="0"
                      max="5"
                      value={e.rate}
                     
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                 
                  
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        ))}
    </div>
  );
};
export default WithLoading(MovieList) ;
