import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { chatSlice } from "./chat/chatSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    chat: chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {sliceName: SliceState}
export type AppDispatch = typeof store.dispatch;
