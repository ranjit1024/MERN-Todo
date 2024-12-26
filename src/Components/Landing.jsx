import { useNavigate } from "react-router-dom";
export function Landing() {
  const navigete = useNavigate();
  return (
    <div
      className="h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
      }}
    >
      <div className="h-screen bg-green-100  bg-todo bg-contain bg-center bg-no-repeat flex items-center justify-center">
      {/* <img src="src/images/personal goals checklist-bro.svg" className="w-[80%]" alt="" /> */}
      </div>

      <div className="flex flex-col bg-green-100  items-center justify-center gap-3">
        <div>
          <p className="font-medium text-green-800 text-2xl font-poppins">
            Mangage and Track Your Tasks
          </p>
        </div>
        <div className="w-[90%] flex-col flex items-center  px-4 rounded-2xl  h-[70%]  ">
          
          <div className="task-1 p-5  w-[99%] mt-4  bg-blue-300  rounded-lg">
            <div className="flex items-center text-center  ">
              <div className="w-[9%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>

              <div className="text-center font-medium text-slate-500 font-poppins text-sm ">
                10 OCT
              </div>
            </div>

            <div className="font-poppins mt-8">
              <p className="font-normal  text-neutral-800 mb-4 text-2xl">
                go for a run
              </p>
              <p className="font-light text-lg  text-neutral-700">
                Run for 30 min at ease pace
              </p>
            </div>

            <div className="bg-gray-400 h-[1.5px] mt-4"></div>

            <div className="flex justify-between mt-1 font-medium text-neutral-500 font-poppins">
              <p>#health </p>
              <p>#fitness</p>
              <p>#slim</p>
            </div>
          </div>

          <div className="task-1 p-5 mt-7  w-[99%]    bg-emerald-300  rounded-lg">
            <div className="flex items-center text-center  ">
              <div className="w-[9%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>

              <div className="text-center font-medium text-slate-500 font-poppins text-sm ">
                12 DEC
              </div>
            </div>

            <div className="font-poppins mt-8">
              <p className=" font-normal text-neutral-800 mb-4 text-2xl">
                Having Dinner
              </p>
              <p className="font-light text-lg  text-neutral-700">
                Having dinner with friend
              </p>
            </div>

            <div className="bg-gray-400 h-[1.5px] mt-4"></div>

            <div className="flex justify-between mt-1 font-medium text-neutral-500 font-poppins">
              <p>#fun </p>
              <p>#eating out</p>
              <p>#testy</p>
            </div>
          </div>

        </div>
        <div className="w-[85%] flex items-center justify-center gap-3 mt-7">
          <button className="w-3/4 border-2 border-green-500 hover:bg-green-500 text-black font-semibold font-poppins text-md mb-4  py-2 rounded-md hover:-translate-y-0.5 transition-all"
          
          onClick={(e)=>{

            const token = localStorage.getItem('Bearer')
            if(!localStorage.getItem(token)){
              navigete('/signup', {replace:true})
              return
            }
            navigete("/todo")
            
          }}>
            Create an account
          </button>
          <button className="w-3/4 bg-gradient-to-l hover:bg-transparent text-white font-semibold font-poppins text-md mb-4 to-green-800 from-green-400 py-2 rounded-md hover:-translate-y-0.5  transition-all"
          onClick={(e)=>{
             const token = localStorage.getItem('Bearer')
            if(!localStorage.getItem(token)){
                console.log("dfsd")
               navigete('/signin', {replace:true})
               return
            }
            navigete("/todo")

          }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
