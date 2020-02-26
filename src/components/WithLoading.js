import React from "react";

const WithLoading = WrappedComponent => {
  return class WithLoadingComponent extends React.Component {
    constructor(props) {
        super(props)
       this.state = {
        isLoading: true
      };
      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 4000);
    }

    render() {
        const {isLoading} = this.state
      return  (
          isLoading ?
        <div class="lds-hourglass"><p></p></div>
       : 
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default WithLoading;
