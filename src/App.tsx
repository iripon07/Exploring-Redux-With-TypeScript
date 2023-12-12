import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const {count} = useSelector((state: RootState) =>state.counter);
  return (
    <div className="mx-auto max-w-2xl h-auto">
      <div className="flex justify-center items-center ">
        <button className="p-10">Increment</button>
        <div>{count}</div>
        <button className="p-10">Decrement</button>
      </div>
    </div>
  );
}

export default App;
