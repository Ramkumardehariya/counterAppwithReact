import { useState } from "react";


function App() {
  const[count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }  

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-slate-700">
        <div className="text-sky-500 font-semibold text-xl ">Increment And Decrement</div>
        <div className="bg-white flex gap-4 py-2 px-6 mt-8 text-2xl "> 
          <button onClick={decreaseHandler} className="border-r-2 border-black pr-4 ">
              -
          </button>
          <div>
          {count}
          </div>
          <button onClick={increaseHandler}>
              +
          </button>
        </div>

        <button onClick={resetHandler}>
          reset
        </button>
    </div>
  );
}

export default App;
