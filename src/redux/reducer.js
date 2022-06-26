import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // here the reducer will be writen
    //1. add
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // 2. delete
    deleteTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // 3. update
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //4. completion
    completeTodos:(state,action)=>{
        return state.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
               completed:true,
              };
            }
            return todo;
          });
    }
  },
});

export const { addTodos, deleteTodos, updateTodos ,completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;