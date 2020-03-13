import SadeRequest from "./sadeRequest";

export default class Category extends SadeRequest {
  constructor() {
    super();
  }

  fetchCategories = async () => {
    try {
      // const {
      //   data: { data }
      // } = await this.noTokenRequestInstance.get(`/categories/all-categories`);
      const {
        data: { categories }
      } = await this.noTokenRequestInstance.get(`/categories/all-categories`);
      console.log(categories);

      return data;
    } catch (err) {
      return this.handleError(err);
    }
  };
}
