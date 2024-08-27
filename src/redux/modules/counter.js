// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = (state = initialState, action) => {
  console.log("🚀 ~ counter ~ action:", action);
  switch (
    action.type // dispatch에게 넘겨받은 type ⭐️ 이 type으로 state값을 변경하기 때문에 action의 type이 중요하다.
  ) {
    case "PLUS_ONE":
      return {
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
