import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllOwnersApi,
  getOwnerByIdApi,
  registerOwnerAPI,
} from "../services/owner";

export const registerOwner = createAsyncThunk(
  "owner/register",
  async ({ body, token }) => {
    const data = await registerOwnerAPI({ body, token });
    console.log("****", body);
    return data;
  }
);

export const getAllOwners = createAsyncThunk("owner/getAll", async (token) => {
  const data = await getAllOwnersApi(token);
  return data;
});

export const getOwnerByCedula = createAsyncThunk(
  "owner/getByCedula",
  async ({ cedula, token }) => {
    const data = await getOwnerByIdApi({ cedula, token });
    return data;
  }
);

export const ownerSlice = createSlice({
  name: "owner",
  initialState: {
    owners: [],
    loading: false,
    error: "",
    httpStatus: "",
    message: "",
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerOwner.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerOwner.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = action.payload.error),
          (state.httpStatus = action.payload.httpStatus),
          (state.status = action.payload.status),
          (state.message = action.payload.message),
          (state.owners = action.payload.content);
      })
      .addCase(getAllOwners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOwners.fulfilled, (state, action) => {
        state.loading = false;
        state.owners = action.payload;
      })
      .addCase(getOwnerByCedula.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOwnerByCedula.fulfilled, (state, action) => {
        state.loading = false;
        state.owners = action.payload;
      });
  },
});

export const selectOwnerState = (state) => state.owners;
export default ownerSlice.reducer;
