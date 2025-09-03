import { create } from 'zustand'
import { Instance } from '../lib/axios.config';

export const useAuthStore = create((set) => ({
    isAuthUser: null,
    login: async (data) => {
        try {
            const res = await Instance.post("/login", data);
            console.log(res.data)
            set({ isAuthUser: res.data });
        } catch (error) {
            console.log("unable to login", error);
        }
    },

    signup: async (data) => {
        try {
            const res = await Instance.post("/signup", data);
            console.log(res.data)
            set({ isAuthUser: res.data });
        } catch (error) {
            console.log("unable to login", error);
        }
    },

    check: async () => {
        try {
            const res = await Instance.get("/check");
            set({ isAuthUser: res.data });
        } catch (error) {
            set({ isAuthUser: null });
            console.log("unable to login", error);
        }
    },

    logout: async () => {
        try {
            await Instance.get("/logout");
            set({ isAuthUser: null });
        } catch (error) {
            console.log("unable to login", error);
        }
    }
}))