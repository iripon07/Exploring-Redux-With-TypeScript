import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementBAmount,
} from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-2xl h-auto">
      <div className="flex justify-center items-center ">
        <button className="p-10" onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button className="p-10" onClick={() => dispatch(incrementBAmount(5))}>
          Increment
        </button>
        <div>{count}</div>

        <button className="p-10" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
