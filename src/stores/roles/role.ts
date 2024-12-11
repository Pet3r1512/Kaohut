import { create } from "zustand";

type State = {
    role: "student" | "teacher";
    workplace: "" | "high school" | "university" | "business";
};

type Actions = {
    setRole: (role: "student" | "teacher") => void;
    setWorkplace: (workplace: "" | "high school" | "university" | "business") => void;
};

const useRoleStore = create<State & Actions>((set) => ({
    role: "teacher",
    workplace: "",
    setRole: (role) => set(() => ({ role, workplace: "" })),
    setWorkplace: (workplace) =>
        set((state) => {
            if (state.role === "teacher" || workplace === "") {
                return { workplace };
            }
            return state;
        }),
}));

export default useRoleStore;
