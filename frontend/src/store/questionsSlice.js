import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    clearQuestions: () => {
      return [];
    },
  },
});

export const { addQuestion, clearQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
