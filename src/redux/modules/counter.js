// 초기 상태값
const initialState = {
  number: 0,
};

// const PLUS_ONE = "PLUS_ONE";
// const MIUNS_ONE = "MIUNS_ONE";

const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

// action creator => action 객체를 만듦 : type과 payload 가질 수 있다.
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload, // input에 입력된 값만큼!
  };
};

export const removeNumber = (payload) => {
  return {
    type: REMOVE_NUMBER,
    payload,
  };
};

const counter = (state = initialState, action) => {
  //console.log("🚀 ~ counter ~ action:", action);
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case REMOVE_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
