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
  loading?: boolean;
}

const initialState: AuthState = {
  status: "checking", // Estado inicial
  user: {}, // Usuario vacío al inicio
  errorMessage: undefined, // Sin errores inicialmente
  loading: false, // Cargando inicialmente desactivado, se activa cuando se inicia sesión
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = "authenticated";
      state.errorMessage = undefined;
      state.loading = false;
    },
    logout: (state, action: PayloadAction<undefined | string>) => {
      state.user = {};
      state.status = "not-authenticated";
      state.errorMessage = action.payload;
      state.loading = false;
    },
    checkStatus: (state) => {
      state.user = {};
      state.status = "checking";
      state.errorMessage = undefined;
      state.loading = true;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, checkStatus, clearErrorMessage, logout, startLoading, stopLoading } = authSlice.actions;

export default authSlice.reducer;
