import { legacy_createStore } from "redux";
import { CountReducer } from "./CountReducer";


export const Store =  legacy_createStore(CountReducer)