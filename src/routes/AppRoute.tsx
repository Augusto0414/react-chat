import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from "../auth/pages";
export const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="Home" element={<></>} />
            </Routes>
        </Router>

    )
}
