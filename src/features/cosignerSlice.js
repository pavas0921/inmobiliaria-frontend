import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  registerCosignerAPI } from "../services/cosigner";

export const registerCosigner = createAsyncThunk(
  "cosigner/register",
  async ({ body, token }) => {
    const data = await registerCosignerAPI({ body, token });
    console.log("****", body);
    return data;
  }
);

export const cosignerSlice = createSlice({
  name: "cosigner",
  initialState: {
    cosigners: [],
    loading: false,
    error: "",
    httpStatus: "",
    message: "",
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCosigner.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerCosigner.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = action.payload.error),
          (state.httpStatus = action.payload.httpStatus),
          (state.status = action.payload.status),
          (state.message = action.payload.message),
          (state.cosigners = action.payload.content);
      })
  },
});

export const selectCosignerState = (state) => state.cosigners;
export default cosignerSlice.reducer;
