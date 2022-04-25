const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit")
// const initialState = [];
export const  STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR: "error",
    LOADING:"loading",
});

const productSlice = createSlice({
   name: "cart",
   initialState : {
       data: [] ,                             // list of product
        status: STATUSES.IDLE
                        
   },
   reducers: {
      // setProduct(state,action){   
      //    state.data = action.payload;
      //                                                          //redux
      //                                                         //return[...state,action.payload];     previously  
      //                                                      //  state.push(action.payload); 
      // } ,

   //   setStatus(state,action){
   //       state.status = action.payload;
   //    } , 

      // remove(state,action){
      //    return state.filter(item => item.id !== action.payload)
      // }                                   
   },

   extraReducers:(builder)=>{
      builder
      .addCase(fetchProducts.pending , (state,action) => {
         state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled,(state,action) => {
         state.data = action.payload;
         state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected,(state,action) =>{
         state.status = STATUSES.ERROR;
      })
   }


})

// action.payload:  we need to to defined function and action.payload perform actions as well as create  reducers also
// export const {add,remove} = cartSlice.actions; 
export const {setProduct, setStatus} = productSlice.actions; 
export default productSlice.reducer;

// {type:"add/cart" , payload: 1}       // previously


// Thunks............

export const fetchProducts = createAsyncThunk("products/fetch",async() => {
   const res = await fetch("https://fakestoreapi.com/products")
   const data = await res.json()
   return data;
})




// .............................................

//  export function fetchProduct() {
//     return async function fetchProductThunk(dispatch,getState){               // thunk return function
//        dispatch(setStatus(STATUSES.LOADING));
//       try {
//          const res = await fetch("https://fakestoreapi.com/products")
//          const data = await res.json()
//          dispatch(setProduct(data))  
//          dispatch(setStatus(STATUSES.IDLE))                                                        //dispatching action
//        } catch(err){
//           console.log(err);
//          dispatch(setStatus(STATUSES.ERROR))    
//        }
//     }
//  }