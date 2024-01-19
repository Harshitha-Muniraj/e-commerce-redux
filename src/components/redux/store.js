import { createStore } from "redux";
import handleCart from "./reducers/handleCart";

const store=createStore(handleCart)

export default store
