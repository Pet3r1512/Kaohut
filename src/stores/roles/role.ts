/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export type RoleState = {
    role: string;
    workplace: string;
};

export type RoleActions = {
    setRole: (role: string) => void;
    setWorkplace: (workplace: string) => void;
    getRole: () => string;
    getWorkplace: () => string;
};

export type RoleStore = RoleState & RoleActions;

export const defaultRoleState: RoleState = {
    role: "",
    workplace: "",
};

export const useRoleStore = create<RoleStore>((set: any, get: any) => ({
    ...defaultRoleState,
    setRole: (role: string) => {
        set((state: RoleState) => ({
            ...state,
            role,
            workplace: "", // Reset workplace when role changes
        }));
    },
    setWorkplace: (workplace: string) => {
        set((state: RoleState) => ({
            ...state,
            workplace: state.role === "teacher" || workplace === "" ? workplace : state.workplace,
        }));
    },
    getRole: () => {
        return get().role;
    },
    getWorkplace: () => {
        return get().workplace;
    },
}));
