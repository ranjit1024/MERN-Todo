import { useState, useRef, useEffect, useMemo, memo} from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { dateAtom, desAtom, randomcolor, titleAtom, todoList } from "../state/atom/atom.jsx";




export function Todo() {
  
  let [add, setAdd] = useState(false);

  return (
    <RecoilRoot>
      
      <div className="grid" id="main" style={{
        gridTemplateColumns:'1fr'
      }}>

      <div className="h-[100%] flex items-center flex-col w-full bg-gradient-to-tl to-green-100 from-blue-50 ">
        <div className="mt-12 w-full flex flex-col items-center relative ">
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
          > 
            Add Todo
          </div>

  
            
          
          <div className="absolute bottom-[-20%] right-[5%] font-poppins hover:cursor-pointer">
          
          <button className="bg-gradient-to-tr to-green-300  from-emerald-300 px-3 py-2 rounded-md text-gray-600 hover:border-blue-500  transition-all duration-300 border font-medium "
          onClick={(e)=>{
            document.querySelector("#main").style.gridTemplateColumns = "70% 30%"
          }}
          > Show Completed Task</button>
          </div>


         
            
        </div>
        

        

        {add ? (
          <AddTodo setAdd={setAdd}></AddTodo>
        ) : null}

        <div className="w-[100%] mb-4 h-[100%] bg-gradient-to-tl to-green-100 from-blue-50  ">{
          
           <ListTodoCompoent add={add}></ListTodoCompoent>
}
      
        </div>

      </div>

    <div >
      </div> 
      </div>
     
      
    </RecoilRoot>
  );
}

const AddTodo = memo (({setAdd}) => {
  let [title, setTitle] = useRecoilState(titleAtom);
  let [descripition, setDes] = useRecoilState(desAtom);

  let getDate = useRecoilValue(dateAtom);



  return (
    <div
      className="w-screen h-screen  fixed flex items-center justify-center pointer-events-auto transition-all z-10
     "
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
  
      <div className="absolute bg-gray-100 p-10 rounded-md font-poppins shadow-md w-1/2 shadow-blue-100">
        <h1 className="font-semibold text-xl text-green-800 text-center mb-6">
          Add New Task
        </h1>

        <div
          className="flex flex-col items-center
         w-[100%]"
        >
          <GetDate></GetDate>

          <input
            className=" bg-white font-medium w-[100%] mt-4 shadow-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-400 hover:border-blue-300 shadow-sm focus:shadow font-poppins"
            placeholder="Task Name"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <textarea
            className=" bg-white w-[100%] font-normal h-[100%] mt-4 mb-7  shadow-blue-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-400 hover:border-blue-300 shadow-sm focus:shadow font-poppins"
            placeholder="Task Description"
            onChange={(e)=>{
              setDes(e.target.value)
            }}
          />

          <button
            className="bg-green-600 px-3 py-2 rounded-md font-medium text-white hover:scale-105 hover:bg-green-500 transition-all"
            onClick={async (e) => {
              setAdd(false);
              
              console.log(title);
              console.log(descripition);

              window.location.reload()

              const token = localStorage.getItem("Bearer");
              const response = await fetch(
                "http://192.168.2.6:3000/todo/createtodo",
                {
                  method: "POST",

                  body: JSON.stringify({
                    date: getDate,
                    title: title,
                    descripition: descripition
                  }),

                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    authorization:`Bearer ${token}`
                  },
                });
                

                
              const data = await response.json();
            
            }}
          >
            Add Task
          </button>

        </div>
          <div className="absolute top-2 right-3"
          onClick={(e)=>{

           setAdd(false)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-8 hover:scale-105 hover:cursor-pointer">
  <path strokeLinecap="round" strokeLineJoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 

  />
</svg>

          </div>
      </div>
    
    </div>
  );
})

const  ListTodoCompoent = memo ( ({add}) => {
     let todolist = useRecoilValue(todoList);
     return (
      <div className="flex justify-center items-center ">



      <div className="w-[90%]  h-[100%] grid gap-4" style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        justifyContent:'center'
      }}>
        {
          todolist.map(todo => (
            <TaskComp  date={todo.date} title={todo.title} descripition={todo.descripition}></TaskComp>
          ))
        }
      </div>
      </div>
     )
     
})


function TaskComp({date,title, descripition}) {

  let [complete, setComplete] = useState(false);
  return (
    
    <div id="task" className=" relative  task-1 p-5 mt-7  w-[100%]  bg-white rounded-lg shadow-md shadow-gray-400 transition-all hover:scale-[1.02] hover:cursor-pointer duration-300"
    style={{
      
    }}
    onMouseMove={(e)=>{
      console.log("fdsf");
      setComplete(true);
    }}
    onMouseLeave={(e)=>{
      setComplete(false)
    }}>
      <div className="flex relative items-center text-center  ">
        <div className="w-[100%] flex items-center justify-between">

        <div className="flex flex-row gap-2 items-cente">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
        

        
        <div className="text-center font-medium text-slate-500 font-poppins text-sm ">
          {date}   
        </div>

         
        </div>

        <div className="font-poppins font-noraml text-red-400">Pending</div>

      </div>
      </div>

      <div className="font-poppins mt-8">
        <p className=" text-neutral-700 font-medium   mb-5 text-2xl" style={{
          // fontWeight:'400'
        }}>
          {title}
        </p>
        <p className="font-normal text-lg mb-1 text-neutral-900">
          {descripition}
        </p>


 

      <div className="absolute w-[100%] h-[100%]  top-0 left-0   font-medium font-poppins text-xl ">
       {
        (complete) ? <IsComplete/> :null
       }
      </div>
        
      </div>


    </div>
  );
}

function GetDate() {
  const date = useRecoilValue(dateAtom);
  return (
    <div className="flex font-medium text-gray-600 gap-2 w-full items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="gray"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
      {date}
    </div>
  );
}


function IsComplete(){
  return <div className="w-[100%]  flex items-center justify-center h-[100%] rounded-lg backdrop-blur-[0.8px] shadow-md shadow-green-200" style={{
    backgroundColor:'rgb(193, 225, 193, 0.2)'
  }}>
 
 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#004526
" className="bi bi-check-all " viewBox="0 0 16 16">
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" className="shadow-md shadow-black"/>
</svg>
  </div>
}

function ShowCompletedTask(){
  return <div className="w-[30%] relative bg-gray-200">
    lij
  </div>
}