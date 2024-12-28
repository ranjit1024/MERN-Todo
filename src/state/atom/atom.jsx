import recoil from "recoil"
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