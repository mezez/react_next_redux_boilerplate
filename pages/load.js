import React, { Component } from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import { Button } from "reactstrap";

const styledDiv = styled.div`
  margin-left: 4rem;
  padding: 4rem;
`;

export class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountCss: false
    };
  }
  componentDidMount() {}

  loadStyle = () => {
    this.setState({
      mountCss: true
    });
  };

  render() {
    return (
      <div className="page-content">
        {/* {this.state.mountCss == false && (
          <Button onClick={this.loadStyle} outline color="primary">
            Load Style
          </Button>
        )} */}
        <SideMenu></SideMenu>
      </div>
    );
  }
}

export default Load;
