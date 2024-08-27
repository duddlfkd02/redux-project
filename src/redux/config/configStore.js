// import { combineReducers, createStore } from "redux";
// import counter from "../modules/counter";
// // 1. rootReducer 생성하기
// const rootReducer = combineReducers({ counter });

// // 2. store 생성하기
// const store = createStore(rootReducer);

// // 3. 만든 store 내보내기
// export default store;

// redux tool kit 버전으로 수정
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

// 객체로 들어감!
const store = configureStore({
  reducer: {
    counter: counterSlice,
    // counter는 우리가 createSlice를 만들면서 지정한 name!
  },
});

export default store;
