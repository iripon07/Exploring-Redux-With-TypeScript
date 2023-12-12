import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-2xl h-auto">
      <div className="flex justify-center items-center ">
        <button className="p-10" onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button className="p-10" onClick={() => dispatch(incrementByAmount(5))}>
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
