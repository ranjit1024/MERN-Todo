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
            const response = await fetch("http://192.168.2.6:3000/todo/listtodo",{
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

export const randomcolor = selector({
    key:'colorsSelctor',
    get: ({get}) =>{
           const randNumber = Math.floor(Math.random() * (5))
            const colors = ["emerald", "indigo", "cyan","violet" ];
            return(colors[randNumber])
    }
})