import React, { Component } from "react";
import SideMenu from "../components/SideMenu";

export class AdminProducts extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            minWidth: "100px",
            minHeight: "100px",
            border: "1px solid black",
            background: "white"
          }}
        >
          <SideMenu>Admin Products</SideMenu>
        </div>
      </div>
    );
  }
}

export default AdminProducts;
