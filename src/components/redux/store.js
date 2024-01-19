import { createStore } from "redux";
import rootReducers from "./reducers";
import { cart } from "./reducers/handleCart";
const store=createStore(rootReducers)

export default store
