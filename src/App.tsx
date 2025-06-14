import "./App.css";

function App() {
  return (
    <div>
      <nav className="flex  justify-between md:mx-40 mx-4 md:space-x-100 mt-2 items-center">
        <div className="flex items-center space-x-1">
          <img
            src="assets/atrium.png"
            alt="lol"
            className="h-12 w-12 mt-2 "
          />
          <h1 className="font-proj font-thin text-[#85ff99] text-3xl mt-2 hover:text-green-400">
            {" "}
            atrium
          </h1>
        </div>
        <div className="font-proj font-thin text-white hover:underline hover:text-gray-500 mt-3  text-xl">
          about-us
        </div>
      </nav>

      <div className="flex justify-center space-x-5 items-center mt-30 ">
        <img src="assets/atrium2.png" alt="lol" className="w-40 h-40"></img>
        <div className="md:text-8xl text-4xl text-[#85ff99] hover:text-green-400">
          Where Developers <br></br>Ship Their Best Work
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 justify-center space-x-5 items-center">
        <div className="border border-gray-500 px-70 py-40 rounded-xl">
          <h1>hi</h1>
        </div>
        <div className="border border-gray-500 px-70 py-40 rounded-xl">
          <h1> hi</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
