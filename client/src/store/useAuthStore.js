import { create } from 'zustand'
import { Instance } from '../lib/axios.config';

export const useAuthStore = create((set)=>({
    isAuthUser:null,
login:async(data)=>{
    try {
        const res= await Instance.post("/login",data);
        console.log(res.data)
        set({isAuthUser:res.data});
    } catch (error) {
        console.log("unable to login", error);
    }
}
}))