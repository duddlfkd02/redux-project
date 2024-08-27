import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {
  number: 0,
};

//counterSlice는 action value, action creator, reducer 모두 다 가지고 있음!
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {
    // 로직 수정 - state와 action을 인자로 가져온다

    // ✅ slice에서 reducer를 만들 때는 counter 이름을 불러오지 않아도 되고
    addNumber: (state, action) => {
      //state 초기값 number에 payload 값을 더하기
      state.number = state.number + action.payload;
      // immer 라이브러리를 제공해주기 때문에 표현 가능!
    },
    removeNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// action creator / reducer 만들기
// action value, action creator 사용하도록 export 하기
export const { addNumber, removeNumber } = counterSlice.actions;
// reducer 사용하도록 export 하기
export default counterSlice.reducer;
