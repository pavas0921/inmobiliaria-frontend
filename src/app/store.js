import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "../features/ownerSlilce";
import tenantReducer from "../features/tenantSlilce";
import userReducer from "../features/userSlice";
import cosignerReducer from "../features/cosignerSlice"


export const store = configureStore({
  reducer: {
    users: userReducer,
    owners: ownerReducer,
    tenants: tenantReducer,
    cosigners: cosignerReducer
  },
});
