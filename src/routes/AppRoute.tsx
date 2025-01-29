import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthPage, LoginPage, RegisterPage } from "../auth/pages";
import { ChatPage } from "../auth/chat";
export const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< AuthPage />} >
                    <Route index element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="home" element={<ChatPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </Router>

    )
}
