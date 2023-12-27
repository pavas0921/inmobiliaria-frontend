import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../services/user";


export const login = createAsyncThunk("user/login", async (body) => {
  const data = await loginAPI(body);
  return data;
});

export const userSlice = createSlice({
  name: "users",
  initialState:{
    users:[],
    loading: false,
  },
  reducers: {
      
  },
  extraReducers: (builder) => {
    builder   
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.users =  action.payload
        
      });
  },
});

export const { clearResponse, updateUserList, clearAll } = userSlice.actions;
export const selectUserState = (state) => state.users;
export default userSlice.reducer;
