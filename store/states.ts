import { create } from 'zustand'

interface authType{
    open:boolean;
    setOpen:(status:boolean)=>void
}

export const statesStore = create<authType>((set) => ({
    open:false,
    setOpen:(status)=>set({open:status}),
 
}))