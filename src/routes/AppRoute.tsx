import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthPage, LoginPage, RegisterPage } from "../auth/pages";
import { ChatPage } from "../chat";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
export const AppRoute = () => {

    const { checkAuthToken, status } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === "checking") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>

        );
    }
    return (
        <Router>
            <Routes>
                {
                    (status === "not-authenticated") ? (
                        <>
                            <Route path="/auth" element={< AuthPage />} >
                                <Route index element={<LoginPage />} />
                                <Route path="register" element={<RegisterPage />} />
                            </Route>
                            <Route path="/*" element={<Navigate to="/auth" />} />
                        </>
                    ) :
                        (
                            <>
                                <Route path="/" element={<ChatPage />} />
                                <Route path="/*" element={<Navigate to="/" />} />
                            </>
                        )
                }
            </Routes>
        </Router>

    )
}
