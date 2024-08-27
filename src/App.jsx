import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { plusOne, minusOne } from "./redux/modules/counter";
import { addNumber, removeNumber } from "./redux/modules/counter";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  // console.log("🚀 ~ App ~ counterReducer:", counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number} <br />
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
