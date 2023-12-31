import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from "../Layaout/Layaout";
import { Home, Login, SingUp ,NoPage } from "../pages";

const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layaout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                
            </Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
);

export default MyRoutes;
