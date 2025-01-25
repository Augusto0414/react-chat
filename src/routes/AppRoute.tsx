import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage, LoginPage, RegisterPage } from "../auth/pages";
export const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} >
                    <Route index element={<LoginPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="Home" element={<></>} />
            </Routes>
        </Router>

    )
}
