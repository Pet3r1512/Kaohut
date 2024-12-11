import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    role: string;
    workplace: string;
};

type Actions = {
    setRole: (role: string) => void;
    setWorkplace: (workplace: string) => void;
};

const useRoleStore = create<State & Actions>()(
    persist(
        (set) => ({
            role: "",
            workplace: "",
            setRole: (role) =>
                set(() => ({
                    role,
                    workplace: "", // Reset workplace when role changes
                })),
            setWorkplace: (workplace) =>
                set((state) => ({
                    workplace: state.role === "teacher" || workplace === "" ? workplace : state.workplace,
                })),
        }),
        {
            name: "role-store", // Storage key name
        }
    )
);

export default useRoleStore;
