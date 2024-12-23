export function Signup(){
  return <div className="h-screen grid" style={{
    gridTemplateColumns:"60% 40%"
  }}>

    <div className="bg-gradient-to-tr to-green-100 from-green-200 ">

    <div className="task-1 p-5 mt-7  w-[50%]   bg-blue-300 shadow-md shadow-blue rounded-lg">
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
      

      
    </div>
    
  </div>
}