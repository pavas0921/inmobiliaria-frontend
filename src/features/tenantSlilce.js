import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllTenantsApi,
  getTenantByIdApi,
  registerTenantAPI,
} from "../services/tenant";

export const registerTenant = createAsyncThunk(
  "tenant/register",
  async ({ body, token }) => {
    const data = await registerTenantAPI({ body, token });
    return data;
  }
);

export const getAllTenant = createAsyncThunk("tenant/getAll", async (token) => {
  const data = await getAllTenantsApi(token);
  return data;
});

export const getTenantById = createAsyncThunk(
  "tenant/getByCedula",
  async ({ cedula, token }) => {
    const data = await getTenantByIdApi({ cedula, token });
    return data;
  }
);

export const tenantSlice = createSlice({
  name: "tenant",
  initialState: {
    tenants: [],
    loading: false,
    error: "",
    httpStatus: "",
    message: "",
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerTenant.fulfilled, (state, action) => {
        state.loading = false;
        (state.error = action.payload.error),
          (state.httpStatus = action.payload.httpStatus),
          (state.status = action.payload.status),
          (state.message = action.payload.message),
          (state.owners = action.payload.content);
      })
      .addCase(getAllTenant.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTenant.fulfilled, (state, action) => {
        state.loading = false;
        state.tenants = action.payload;
      })
      .addCase(getTenantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTenantById.fulfilled, (state, action) => {
        state.loading = false;
        state.tenants = action.payload;
      });
  },
});

export const selectTenantState = (state) => state.tenants;
export default tenantSlice.reducer;
