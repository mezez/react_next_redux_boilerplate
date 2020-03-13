import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  productState: productReducer
});

export default rootReducer;
