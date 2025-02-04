import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { checkStatus, clearErrorMessage, login, logout, startLoading, stopLoading } from "../store/auth";
import chatApi from "../api/chatApi";
import { AxiosError } from "axios";

interface User {
  username?: string;
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

  const signUp = async ({ username, email, password }: User): Promise<boolean | undefined> => {
    if (username === "" || email === "" || password === "") {
      dispatch(logout("Todos los campos son requeridos"));
      setTimeout(() => dispatch(clearErrorMessage()), 20);
      return;
    }
    dispatch(startLoading());
    try {
      const { data } = await chatApi.post("/auth/register", { username, email, password });

      dispatch(stopLoading());
      return data !== null;
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error en el registro:", err.response?.data || err.message);
      const errorMessage = (err.response?.data as { message: string })?.message || "Error desconocido";
      dispatch(logout(errorMessage));
      setTimeout(() => dispatch(clearErrorMessage()), 20);
      return false;
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
    signUp,
  };
};
