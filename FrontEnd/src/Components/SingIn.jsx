import { useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  let [pstatus, setStatus] = useState(false);
  const username = useRef();
  const password = useRef();
  let [isEmailValid, setValidEmail] = useState(false);
  let [isPasswordValid, setPasswordValid] = useState(false);

  const token = localStorage.getItem("Bearer");
  return (
    <div
      className="h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
      }}
    >
      {token ? <Navigate to={"/todo"} /> : null}
      <div className="bg-gradient-to-tl to-green-200 from-blue-100 first">
        <div className="task-1 p-5 mt-7  w-[60%] translate-x-[10%] translate-y-[10%] bg-blue-200  rounded-lg shadow-md shadow-gray-400">
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
            <p className="font-normal  text-neutral-800 mb-4 text-3xl">
              go for a run
            </p>
            <p className="font-light text-lg  text-neutral-700">
              Run for 30 min at ease pace
            </p>
          </div>

          <div className="bg-gray-400 h-[1.5px] mt-4"></div>

          <div className="flex justify-between mt-1 font-medium text-neutral-500">
            <p>#health </p>
            <p>#fitness</p>
            <p>#slim</p>
          </div>
        </div>

        <div className="task-1 p-5 mt-7  w-[60%] translate-x-1/2 translate-y-1/2  bg-emerald-300  rounded-lg shadow-md shadow-gray-300">
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
          </div>stringify
        </div>
      </div>
      <div className="login flex-col bg-gradient-to-tl to-green-200 from-blue-100 flex justify-center items-center text-center h-[100%] w-[100%]">
        <div className="w-[90%] flex flex-col items-center text-center">
          <h1 className="mb-10 font-poppins font-semibold text-3xl text-green-700">
            Sign In
          </h1>

          <div className="w-[90%] flex flex-col justify-start items-start text-start">
            <label
              htmlFor="email"
              className=" mb-1 ml-1 text-sm  text-slate-900 font-poppins font-medium"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-blue-300 shadow-sm focus:shadow font-poppins"
              placeholder="youremail@gmail.com"
              ref={username}
              id="email"
            />
            {isEmailValid ? <EmailValidator /> : null}
          </div>

          <div className="w-[90%] flex  text-start mt-4 relative">
            <div className="relative">
              <label className="block mb-1 ml-1 text-sm  text-slate-900 font-poppins font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={pstatus ? "text" : "password"}
                  ref={password}
                  className="w-full pl-3 pr-3 py-2 bg-gray-100 font-poppins placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-blue-300 shadow-sm focus:shadow"
                  placeholder="Your password"
                  id="password"
                />
                <div className="absolute right-0 inset-y-1 pr-2 hover:cursor-pointer flex items-center ">
                  {pstatus ? (
                    <ByEye setStatus={setStatus}></ByEye>
                  ) : (
                    <ByLashEye setStatus={setStatus}></ByLashEye>
                  )}
                </div>
              </div>
                  {
                    isPasswordValid?<PasswordValidator/>:null
                  }
             

              <p class="flex items-start mt-2 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  class="w-5 h-5 mr-1.5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </p>
            </div>
          </div>

          <button
            className="w-[90%] bg-gradient-to-l text-white font-semibold font-poppins text-md mb-4 to-green-800 from-green-400 py-2 rounded-md hover:-translate-y-1 transition-all mt-10"
            onClick={async (e) => {
              if (username.current.value == "") {
                document.querySelector("#email").style.border = "1px solid red";
              }
              if (password.current.value == "") {
                document.querySelector("#password").style.border =
                  "1px solid red";
                return;
              }

              const response = await fetch(
                "https://mern-todo-59u7.onrender.com/user/signin",
                {
                  method: "POST",

                  body: JSON.stringify({
                    username: username.current.value,
                    password: password.current.value,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                   
                  },
                }
              );
              const data = await response.json();
        
              if (data.message == "username Not found") {
                setValidEmail(true);;
                return;
              }
              if (data.message == "password is incorrect") {
                setPasswordValid(true);
                return;
              }
              localStorage.setItem("Bearer", data.token);
              navigate("/todo");

            

            }}
          >
            Sign In
          </button>
        </div>

        <div className="text-blue-500 font-medium hover:cursor-pointer flex items-center justify-center  w-[90%]">
          <button
            className="hover:underline underline-offset-4 decoration-1 text-center"
            onClick={(e) => {
              navigate("/signup");
            }}
          >
            New to app ? sign up
          </button>
        </div>
      </div>
    </div>
  );
}

function ByEye({ setStatus }) {
  return (
    <button
      onClick={(e) => {
        setStatus(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="gray"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </button>
  );
}

function ByLashEye({ setStatus }) {
  return (
    <button
      onClick={(e) => {
        setStatus(true);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="graY"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
    </button>
  );
}
function EmailValidator() {
  return (
    <h1 className="ml-1 mt-1 font-normal text-red-600">Email not found</h1>
  );
}
function PasswordValidator() {
  return (
    <h1 className="ml-1 mt-1 font-normal text-red-600">
      Password is incorrect
    </h1>
  );
}
