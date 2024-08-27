import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import { addNumber, removeNumber } from "./redux/modules/counter";
//slices 폴더에 있는거로 경로 바꾸기!
import { addNumber, removeNumber } from "./redux/slices/counterSlice";

const App = () => {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => {
    return state.counter;
    // ✅ useSelector로 가져와서 쓸 때는 name 적어서 reducer 안의 어떤 걸 가져올건지 표시!
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
