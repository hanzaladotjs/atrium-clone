import "./App.css";

import atriumLogo from "./assets/atrium.jpeg";
import atrium2 from "./assets/atrium2.png";
import leftImage from "./assets/atrium3-.png";
import rightImage from "./assets/atrium4.jpeg"

function App() {
  return (
    <div>
      <nav className="flex  justify-between md:mx-40 mx-4 md:space-x-100 mt-2 items-center">
        <div className="flex items-center space-x-1">
          <img src={atriumLogo} alt="lol" className="h-12 w-12 mt-2 " />
          <h1 className="text-[#85ff99] text-3xl mt-2 hover:text-green-400">
            {" "}
            atrium
          </h1>
        </div>
        <div className="text-white hover:underline hover:text-gray-500 mt-3  text-xl">
          about-us
        </div>
      </nav>

      <div className="flex justify-center md:space-x-20 items-center mt-30 ">
        <img src={atrium2} alt="lol" className="w-43 h-40"></img>
        <div className="md:text-8xl text-4xl text-[#85ff99] hover:text-green-400">
          Where Developers <br></br>Ship Their Best Work
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 justify-center space-y-5 md:space-y-0 md:space-x-5 items-center">
        <div className="flex flex-col border hover:border-gray-200 pt-5 pl-10 border-gray-500 w-90  md:w-180 h-100 rounded-2xl text-start">
          <div className="flex  justify-between items-center" >
            <div>
              <h1 className="text-2xl md:text-3xl mb-2 text-[#85ff99]  ">
                For
              </h1>
              <h1 className="text-3xl md:text-4xl"> Developers</h1>
            </div>
            <button className="md:w-40 md:h-20 h-15 w-25 mr-5 rounded-lg  md:mr-5 md:rounded-xl text-[#85ff99] border-green-400  border-3 hover:border-white hover:bg-black  hover:text-white font-bold">
              {" "}
              start building{" "}
            </button>
          </div>

          <div className="flex justify-between mt-10">
            <div className="flex flex-col">
              <div className="text-gray-400 pl-1 mb-2 ">Programs:</div>
              <div className="flex space-x-6 mb-2">
                <h1 className="hover:text-2xl text-xl">🦄️</h1>
                <div >
                  Uniswap Hook <br></br> Incubator
                </div>
              </div>
              <div className="flex space-x-6">
                <svg
className="hover:bg-green-900"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#85ff99"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.9922 15.25C19.4064 15.25 19.7422 15.5858 19.7422 16V18.25H22C22.4142 18.25 22.75 18.5858 22.75 19C22.75 19.4142 22.4142 19.75 22 19.75H19.7422V22C19.7422 22.4142 19.4064 22.75 18.9922 22.75C18.578 22.75 18.2422 22.4142 18.2422 22V19.75H15.9922C15.578 19.75 15.2422 19.4142 15.2422 19C15.2422 18.5858 15.578 18.25 15.9922 18.25H18.2422V16C18.2422 15.5858 18.578 15.25 18.9922 15.25Z"
                    fill="#85ff99"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 9.25C2.58579 9.25 2.25 9.58579 2.25 10V19C2.25 20.5188 3.48122 21.75 5 21.75H16C16.1989 21.75 16.3897 21.671 16.5303 21.5303L16.7422 21.3185V21.25H15.9922C14.7495 21.25 13.7422 20.2426 13.7422 19C13.7422 17.7574 14.7495 16.75 15.9922 16.75H16.7422V16C16.7422 14.7574 17.7495 13.75 18.9922 13.75C20.2348 13.75 21.2422 14.7574 21.2422 16V16.75H21.3107L21.5303 16.5303C21.671 16.3897 21.75 16.1989 21.75 16V10C21.75 9.58579 21.4142 9.25 21 9.25H3Z"
                    fill="#85ff99"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V6C7.75 6.41421 7.41421 6.75 7 6.75C6.58579 6.75 6.25 6.41421 6.25 6V4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V10C3.75 10.4142 3.41421 10.75 3 10.75C2.58579 10.75 2.25 10.4142 2.25 10V6C2.25 4.48122 3.48122 3.25 5 3.25H6.25V2C6.25 1.58579 6.58579 1.25 7 1.25ZM15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V6C15.75 6.41421 15.4142 6.75 15 6.75C14.5858 6.75 14.25 6.41421 14.25 6V4.75H10.5C10.0858 4.75 9.75 4.41421 9.75 4C9.75 3.58579 10.0858 3.25 10.5 3.25H14.25V2C14.25 1.58579 14.5858 1.25 15 1.25ZM17.75 4C17.75 3.58579 18.0858 3.25 18.5 3.25H19C20.5188 3.25 21.75 4.48122 21.75 6V10C21.75 10.4142 21.4142 10.75 21 10.75C20.5858 10.75 20.25 10.4142 20.25 10V6C20.25 5.30964 19.6904 4.75 19 4.75H18.5C18.0858 4.75 17.75 4.41421 17.75 4Z"
                    fill="#85ff99"
                  ></path>
                </svg>
                <div>
                  more coming <br /> soon
                </div>
              </div>
            </div>
            <img src={leftImage} className="pr-34  mt-23 md:-mt-0 md:ml-69 md:default" alt="lol"></img>
          </div>
        </div>
        <div className="flex flex-col border hover:border-gray-200 border-gray-500 md:w-180 h-100 w-90 rounded-2xl pt-5 md:pr-10  ">
          <div className="flex justify-between items-center">
            <div className="pl-10 mr-10 mb-5">
              <h1 className="text-2xl md:text-3xl mb-2 text-[#85ff99]">
                {" "}
                For
              </h1>
              <h1 className="text-3xl md:text-3xl mb-4"> Partners </h1>
            </div>
            <button className=" text-center md:w-40 md:h-20 ml-10 rounded-lg h-15 w-25 md:mr-0 mr-5 md:rounded-xl md:mb-2 text-[#85ff99] border-green-400 text font-bold border-3 hover:bg-black hover:text-white hover:border-white">
              {" "}
              work with us{" "}
            </button>
          </div>
          <img src={rightImage} alt="hi" className="md:h-60 h-45 mt-22 md:mt-8 w-50 md:ml-0 ml-1/2 md:mr-40 "></img>
        </div>
      </div>
    </div>
  );
}

export default App;
