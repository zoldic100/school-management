import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from "../Layaout/Layaout";
import { Home, Login, SingUp ,NoPage } from "../pages";
const Student =()=><div>Welcome to Student dashboard</div>
const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layaout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/student/dashboard" element={<Student />} />
                
            </Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
);

export default MyRoutes;
