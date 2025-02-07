import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        loading: false,
        error: false,
        token: null,
        firms:[],
        brands:[],
        purchases:[],
        sales:[],
        products:[]
    },
    reducers:{
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
          },
          fetchFail: (state) => {
            state.loading = false;
            state.error = true;
          },
          // firmSuccess: (state, {payload}) => {
          //   state.firms = payload.data;
          //   state.loading = false;
          //   state.error = false;
          // },
          stockSuccess: (state, {payload}) => {
            state[payload.url] = payload.data.data;
            state.loading = false;
            state.error = false;
          }
    }
})

export const {fetchFail, fetchStart, firmSuccess, stockSuccess} = stockSlice.actions;
export default stockSlice.reducer;