import { create } from "zustand";

export type User = {
    name: string;
    email: string;
    role: string;
    workplace: string;
};

export type UserActions = {
    setUser: (user: User) => void;
    getUser: () => User;
};

export type UserStore = User & UserActions;

export const defaultUser: User = {
    name: "",
    email: "",
    role: "",
    workplace: ""
};

export const useUserStore = create<UserStore>((set, get) => ({
    ...defaultUser,
    setUser: (user: User) => {
        set(() => ({
            ...user
        }));
    },
    getUser: () => {
        const { name, email, role, workplace } = get();
        return { name, email, role, workplace };
    }
}));
