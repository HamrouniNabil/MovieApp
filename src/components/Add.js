import React, { Component } from "react";


export default class Add extends Component {
  state = {
    title: "",
    rate: 0,
    image: "",
    categorie:"",

  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="Modal">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          +
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" >
                  Add Movie
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
                      id="title"
                      onChange={this.handleChange}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Movie Image</label>
                    <input
                      type="text"
                      name="image"
                      placeholder="Please Insert the link"
                      className="form-control"
                      id="image"
                      onChange={this.handleChange}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categorie">Movie Categorie</label>
                    <select
                      type="text"
                      name="categorie"
                      className="form-control"
                      id="categorie"
                      onChange={this.handleChange}
                    ><option >Choose The Catgorie</option>
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
                      id="rate"
                      min="0"
                      max="5"
                      onChange={this.handleChange}
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
                  onClick={() =>
                    this.props.add({ id:Date.now(), ...this.state })
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
