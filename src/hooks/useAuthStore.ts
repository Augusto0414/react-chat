import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { checkStatus, clearErrorMessage, login, logout } from "../store/auth";
import chatApi from "../api/chatApi";

interface User {
  email: string;
  password: string;
}

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();

  const sigIn = async ({ email, password }: User) => {
    dispatch(checkStatus());
    try {
      const { data } = await chatApi.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      dispatch(login({ name: data.name, email: data.email, uid: data.uid }));
    } catch (error) {
      dispatch(logout("Credenciales invalidas"));
      setTimeout(() => dispatch(clearErrorMessage()), 20);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return dispatch(logout());
    }
    try {
      const { data } = await chatApi.get("/auth/revalidate");
      localStorage.setItem("token", data.token);
      dispatch(login({ name: data.name, email: data.email, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(logout());
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return {
    status,
    user,
    errorMessage,
    sigIn,
    logoutUser,
    checkAuthToken,
  };
};
