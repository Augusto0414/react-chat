import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  uid?: string;
  name?: string;
  email?: string;
}

export interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: User;
  errorMessage?: string;
}

const initialState: AuthState = {
  status: "checking", // Estado inicial
  user: {}, // Usuario vacío al inicio
  errorMessage: undefined, // Sin errores inicialmente
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    logout: (state, action: PayloadAction<undefined | string>) => {
      state.user = {};
      state.status = "not-authenticated";
      state.errorMessage = action.payload;
    },
    checkStatus: (state) => {
      state.user = {};
      state.status = "checking";
      state.errorMessage = undefined;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, checkStatus, clearErrorMessage, logout } = authSlice.actions;

export default authSlice.reducer;
