import React, { Component } from "react";
import Index from "../components/category/index";
import SideMenu from "../components/SideMenu";

export class AdminCategories extends Component {
  render() {
    return (
      <div
        style={{
          minWidth: "45rem",
          minHeight: "45rem",
          border: "1px solid black",
          background: "white"
        }}
      >
        <SideMenu>
          <Index />
        </SideMenu>
      </div>
    );
  }
}

export default AdminCategories;
