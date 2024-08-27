// 초기 상태값
const initialState = {
  number: 0,
};

// 1. plain text 변수/상수화 시키기
const PLUS_ONE = "PLUS_ONE";
const MIUNS_ONE = "MIUNS_ONE";

// 2. 하드코딩이 아니라 호출해서 사용하게 함수로 만들기
//  => action creator
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MIUNS_ONE,
  };
};

// 3.
const counter = (state = initialState, action) => {
  console.log("🚀 ~ counter ~ action:", action);
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MIUNS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
