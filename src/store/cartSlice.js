// feature of redux toolkit - by this we can organise our store data    in small pieces
// reducers: is a function through which we Change(mutate) our state our state.
// Reducers are the pure function  . (pure function: function which does not have any side effect means data outside function will not change)
//funtion which the help of this we can change our state

const {createSlice} = require("@reduxjs/toolkit")
// const initialState = [];

const cartSlice = createSlice({
   name: "cart",
   initialState : [],
   reducers: {
      add(state, action){
          //redux
          //return[...state,action.payload];     previously  
       state.push(action.payload); 
      } ,

      remove(state,action){
         return state.filter(item => item.id !== action.payload)
      }                                   
   }
})

// action.payload:  we need to to defined function and action.payload perform actions as well as create  reducers also
export const {add,remove} = cartSlice.actions; 
export default cartSlice.reducer;

// {type:"add/cart" , payload: 1}       // previously