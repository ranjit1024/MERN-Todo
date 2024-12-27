import { useState } from "react";

export function Todo() {
  let [add, setAdd] = useState(false);
  return (
    <div className="h-screen flex items-center flex-col w-full bg-gradient-to-tl to-green-100 from-blue-50">
      <div className="mt-12 w-full flex flex-col items-center">
        <h1 className="text-center font-poppins font-semibold text-3xl text-green-600">
          Add Todo
        </h1>
        <div
          className=" bg-white w-[90%] mt-4 mb-10  shadow-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-400 
           hover:border-blue-300 shadow-sm focus:shadow font-poppins h-10 hover:cursor-text font-medium"
          placeholder="Add A Todo"
          onClick={(e) => {
            setAdd(true);
            
          }}
        > Add Todo</div>
      </div>

      
      {add ? <AddTodo  setAdd={setAdd}></AddTodo> : null}

    <div className="w-[90%] ">
      <ListTask></ListTask>
    </div>
    </div>
  );
}

function AddTodo({setAdd}) {
  return (
    <div
      className="w-screen h-screen  fixed flex items-center justify-center pointer-events-auto transition-all
     "
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <div className="absolute bg-gray-100 p-10 rounded-md font-poppins shadow-md w-1/2 shadow-blue-100">

      <h1 className="font-semibold text-xl text-green-800 text-center mb-10">Add New Task</h1>

      
      
        <div className="flex flex-col items-center
         w-[100%]">
             <GetDate></GetDate>
            
          <input
            className=" bg-white font-medium w-[100%] mt-4 shadow-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-400 hover:border-blue-300 shadow-sm focus:shadow font-poppins"
            placeholder="Task Name"
          />
          <textarea
            className=" bg-white w-[100%] font-normal h-[100%] mt-4 mb-7  shadow-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-400 hover:border-blue-300 shadow-sm focus:shadow font-poppins"
            placeholder="Task Description"
          />
         
         <button className="bg-green-600 px-3 py-2 rounded-md font-medium text-white hover:scale-105 hover:bg-green-500 transition-all" onClick={()=>{
            setAdd(false);
           
         }
         }>Add Task</button>
        </div>
        
      </div>
    </div>
  );
}



function ListTask(){
    return  <div className="task-1 p-5 mt-7  w-[30%]  bg-emerald-300  rounded-lg shadow-md shadow-gray-300 hover:scale-105 transition-all hover:bg-emerald-400 hover:cursor-pointer">
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

</div>


  
      
}

function GetDate(){
    const date = new Date()
    const currentDate = date.toDateString();
    return <div className="flex font-medium text-gray-600 gap-2 w-full items-center ">
         <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="gray"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
        {
            currentDate
        }

    </div>

}