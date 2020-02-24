import React, { Component } from "react";
import Rate from "./Rate";
import {Navbar,Form,Button,FormControl} from 'react-bootstrap'
export default class Search extends Component {
  state = {
    inputValue: "",
    rateIndex: 0
  };
  render() {
    return (
      <div className="Nav">
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><h2 className="title">Movies Shop</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Form inline >
    
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => {
            this.setState({ inputValue: e.target.value }, () =>
              this.props.search(this.state.inputValue)
            );
          }}/>
      <Button variant="outline-success">Search</Button>
    </Form>
    <Rate
          starIndex={x =>
            this.setState({ rateIndex: x }, () =>
              this.props.starInd(this.state.rateIndex)
            )
          }
          rate={this.state.rateIndex}
        />
  </Navbar.Collapse>
</Navbar>
        
      </div>
    );
  }
}
