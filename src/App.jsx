import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/counter";

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
          // 액션을 생성하는 함수를 만들어서 휴먼에러 방지 => action creator
          dispatch(plusOne());
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
