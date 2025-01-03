import recoil, { atom, selector } from "recoil"
const date = new Date;
export const dateAtom = recoil.atom({
    key:'todoAtom',
    default: date.toDateString(),
})

export const titleAtom = recoil.atom({
    key:"titleAtom",
    default:''
})
export const desAtom = recoil.atom({
    key:"desAtom",
    default:''
})

export const todoList = atom({
    key:"allTodoAtom",
    default: selector({
        key:"fetchalltodo",
        get: async () =>{
            const token = localStorage.getItem("Bearer");
            const response = await fetch("https://mern-todo-59u7.onrender.com/todo/listtodo",{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    authorization:`Bearer ${token}`
                  },
            });
            const data = response.json();
            
            return data;
        }
    })
})

export const completeTodoList = atom({
    key:"allcompleAtom",
    default: selector({
        key:"fetchallcomlettodo",
        get: async () =>{
            const token = localStorage.getItem("Bearer");
            const response = await fetch("https://mern-todo-59u7.onrender.com/todo/completetodo",{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    authorization:`Bearer ${token}`
                  },
            });
            const data = response.json();
            
            return data;
        }
    })
})
