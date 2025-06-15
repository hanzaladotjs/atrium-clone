import "./App.css";

import atriumLogo from "./assets/atrium.png";
import atrium2 from "./assets/atrium2.png";
import leftImage from "./assets/atrium3-.png";
import rightImage from "./assets/atrium4.png";
import dex from "./assets/dex.jpeg";
import aaron from "./assets/aaron.jpeg";
import me from "./assets/hanzala.jpg"

function App() {
  return (
    <div className="max-h-screen m-w-screen">
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
        <img src={atrium2} alt="lol" className="w-40 h-40"></img>
        <div className="md:text-8xl text-3xl text-[background: #2a9b86;
background: linear-gradient(90deg, rgba(42, 155, 134, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(86, 228, 221, 1) 97%, rgba(114, 237, 83, 1) 100%);] hover:text-green-400">
          Where Developers <br></br>Ship Their Best Work
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 justify-center space-y-5 md:space-y-0 md:space-x-5 items-center">
        <div className="flex flex-col border hover:border-gray-200 pt-5 pl-10 border-gray-500 w-90  md:w-180 h-100 rounded-2xl text-start">
          <div className="flex  justify-between items-center">
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
                <div>
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
            <img
              src={leftImage}
              className="w-50 h-43 md:h-64 md:w-55  mt-23 md:-mt-0 md:ml-69 md:default"
              alt="lol"
            ></img>
          </div>
        </div>
        <div className="flex flex-col border hover:border-gray-200 border-gray-500 md:w-180 h-100 w-90 rounded-2xl pt-5 md:pr-10  ">
          <div className="flex md:space-x-0 md:justify-between space-x-4 items-center">
            <div className="pl-10  mb-5">
              <h1 className="text-2xl md:text-3xl mb-2 text-[#85ff99]"> For</h1>
              <h1 className="text-3xl md:text-3xl mb-4"> Partners </h1>
            </div>
            <button className="md:w-38 w-25 md:h-20 ml-10  rounded-lg h-15 mb-8 md:mr-0  md:rounded-xl md:mb-7 text-[#85ff99] border-green-400 text-sm px-3 font-bold border-3 hover:bg-black hover:text-white hover:border-white">
              {" "}
              work with us
            </button>
          </div>
          <img
            src={rightImage}
            alt="hi"
            className="md:h-60 h-50 mt-22 md:mt-8 w-40 md:w-50 md:ml-0 md:mr-40 "
          ></img>
        </div>
      </div>

      <div className="flex items-center mt-10 mx-10 md:mx-50 ">
        <div className="flex md:flex-row flex-col  space-y-14 md:space-x-90 items-center">
          <div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#85ff99"
              stroke-width="1.5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.21255 12.75C9.12943 13.5242 8.9054 14.1421 8.5147 14.6891C7.99181 15.4211 7.11571 16.1036 5.66459 16.8292C5.29411 17.0144 5.14394 17.4649 5.32918 17.8354C5.51442 18.2059 5.96493 18.3561 6.33541 18.1708C7.88429 17.3964 9.00819 16.5789 9.7353 15.5609C10.4761 14.5238 10.75 13.3571 10.75 12V7.5C10.75 6.53351 9.96649 5.75 9 5.75H5C4.03351 5.75 3.25 6.53351 3.25 7.5V11C3.25 11.9665 4.03352 12.75 5 12.75H9.21255Z"
                fill="#85ff99"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2125 12.75C19.1294 13.5242 18.9054 14.1421 18.5147 14.6891C17.9918 15.4211 17.1157 16.1036 15.6646 16.8292C15.2941 17.0144 15.1439 17.4649 15.3292 17.8354C15.5144 18.2059 15.9649 18.3561 16.3354 18.1708C17.8843 17.3964 19.0082 16.5789 19.7353 15.5609C20.4761 14.5238 20.75 13.3571 20.75 12V7.5C20.75 6.53352 19.9665 5.75 19 5.75H15C14.0335 5.75 13.25 6.53352 13.25 7.5V11C13.25 11.9665 14.0335 12.75 15 12.75H19.2125Z"
                fill="#85ff99"
              ></path>
            </svg>

            <h1 className="text-xl md:h-20 h-70 mb-2 mt-5 w-70 md:w-100">
              UHI was an excellent experience. The depth of content, quality of
              instructors, and level of challenge made it incredibly valuable.
              It’s a program that truly stands out.
            </h1>
            <div className="flex space-x-5 md:mt-30">
              <img src={dex} alt="dex" className="h-10 w-10" />
              <h2 className="flex flex-col space-y-1">
                <h2> Dex Chen </h2>
                <h3> Semantic Layer</h3>
              </h2>
            </div>
          </div>
          <div className="md:mb-10">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#85ff99"
              stroke-width="1.5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.21255 12.75C9.12943 13.5242 8.9054 14.1421 8.5147 14.6891C7.99181 15.4211 7.11571 16.1036 5.66459 16.8292C5.29411 17.0144 5.14394 17.4649 5.32918 17.8354C5.51442 18.2059 5.96493 18.3561 6.33541 18.1708C7.88429 17.3964 9.00819 16.5789 9.7353 15.5609C10.4761 14.5238 10.75 13.3571 10.75 12V7.5C10.75 6.53351 9.96649 5.75 9 5.75H5C4.03351 5.75 3.25 6.53351 3.25 7.5V11C3.25 11.9665 4.03352 12.75 5 12.75H9.21255Z"
                fill="#85ff99"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2125 12.75C19.1294 13.5242 18.9054 14.1421 18.5147 14.6891C17.9918 15.4211 17.1157 16.1036 15.6646 16.8292C15.2941 17.0144 15.1439 17.4649 15.3292 17.8354C15.5144 18.2059 15.9649 18.3561 16.3354 18.1708C17.8843 17.3964 19.0082 16.5789 19.7353 15.5609C20.4761 14.5238 20.75 13.3571 20.75 12V7.5C20.75 6.53352 19.9665 5.75 19 5.75H15C14.0335 5.75 13.25 6.53352 13.25 7.5V11C13.25 11.9665 14.0335 12.75 15 12.75H19.2125Z"
                fill="#85ff99"
              ></path>
            </svg>

            <h1 className="text-xl md:h-20 h-70 md:mb-3 mt-5 w-70 md:w-100">
              Atrium has proven itself as a world-class partner, delivering
              unparalleled developer education and community-building. The
              results speak for themselves.
            </h1>
            <div className="flex space-x-5 md:mt-30">
              <img src={aaron} alt="aaron" className="h-10 w-10" />
              <h2 className="flex flex-col space-y-1">
                <h2> Aaron Lamphere </h2>
                <h3> Uniswap Foundation</h3>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:items-center md:flex-row justify-center md:ml-0 ml-10 mb-10 space-y-8  md:space-x-120 flex-col mt-10">
        <div>
          <ul className="text-2xl text-[#85ff99] mb-2"> Explore</ul>
          <ul>about us</ul>
          <ul>partner w us </ul>
          <ul>uniswap hook incubator</ul>
          <ul> uniswap hook course</ul>
          <ul> hook directory</ul>
          <ul> brand guidelines </ul>
        </div>
        <div>
          <ul className="text-2xl text-[#85ff99] mb-2"> Community </ul>
          <ul> x (twitter)</ul>
          <ul> warpcast </ul>
          <ul> linkedin </ul>
          <ul>weekly-events</ul>
          <ul>blogs</ul>
        </div>
        <div className="md:mb-26">
          <ul className="text-2xl text-[#85ff99] mb-2"> Legal</ul>
          <ul>terms of service </ul>
          <ul>privacy policy </ul>
        </div>
      </div>
      <div className="flex md:justify-center justify-start  ml-8 items-center space-x-2 "> 
        <img src={me} className='h-9 w-9 rounded-4xl' alt="hanzala"></img>
        <h1 className="hover:text-[#85ff99] text-lg mt-1 text-gray-500 "> hanzala 2025 </h1>
      </div>
      <br></br>
    </div>
  );
}

export default App;
