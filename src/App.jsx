import { useSelector } from "react-redux";

const App = () => {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log("🚀 ~ App ~ counterReducer:", counterReducer);

  return <div></div>;
};

export default App;
