import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const App = () => {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  // console.log("🚀 ~ App ~ counterReducer:", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <button
        onClick={() => {
          // dispatch가 reducer에게 action 객체 type값을 넘겨줌
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
