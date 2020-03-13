import React, { Component } from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import { Button } from "reactstrap";

const styledDiv = styled.div`
  margin-left: 4rem;
  padding: 4rem;
`;

export class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="page-content">
        <SideMenu>
          <div
            style={{
              background: "white",
              border: "1px solid red",
              marginLeft: "4rem",
              padding: "4rem"
            }}
          >
            What's up dawg!. Admin page is fucking working
          </div>
        </SideMenu>
      </div>
    );
  }
}

export default AdminHome;
