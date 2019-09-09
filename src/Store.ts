import { createStore } from "redux";
import { headerTextReducer } from "./HeaderTextReducer";

export const store = createStore(headerTextReducer);