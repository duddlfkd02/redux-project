import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";
// 1. rootReducer 생성하기
const rootReducer = combineReducers({ counter });

// 2. store 생성하기
const store = createStore(rootReducer);

// 3. 만든 store 내보내기
export default store;
