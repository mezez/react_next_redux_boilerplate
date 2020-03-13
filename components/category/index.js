import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loadingCategories: true
    };
  }

  componentDidMount() {
    const { getAllCategories, loadingCategories, categories } = this.props;

    // getAllCategories();
    if (loadingCategories === false) {
      setTimeout(() => {
        this.setState(prevState => ({
          ...prevState,
          loadingCategories: loadingCategories,
          categories: categories
        }));
      }, 2000);
    }
  }

  // componentWillMount() {
  //   const { getAllCategories, loadingCategories, categories } = this.props;
  //   getAllCategories();
  // }

  render() {
    return (
      <div>
        {this.state.loadingCategories && (
          <CircularProgress variant={"indeterminate"} color={"primary"} />
        )}
        {this.state.loadingCategories === false &&
          this.state.categories &&
          this.state.categories.length > 0 &&
          this.state.categories.map(category => <p>{category.name}</p>)}
        {this.state.loadingCategories === false &&
          this.state.categories &&
          this.state.categories.length === 0 && <p>No categories available</p>}
      </div>
    );
  }
}

const mapStateToProps = ({ categoryState }) => ({
  //category is destructured from state

  categories: categoryState.categories,
  loadingCategories: categoryState.loadingCategories
});

const mapDispatchToProps = {
  getAllCategories: getAllCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
