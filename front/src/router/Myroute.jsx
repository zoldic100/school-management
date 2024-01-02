import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { GuestLayaout, StudentLayaout } from "../Layaout";
import { Home, Login, SingUp ,NoPage } from "../pages";
import StudentDashboard from "../components/Student/StudentDashboard/StudentDashboard";

const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<GuestLayaout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                
            </Route>
            <Route path="/student" element={<StudentLayaout />}>
                <Route index element={<Home />} />
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                
            </Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
);

export default MyRoutes;
