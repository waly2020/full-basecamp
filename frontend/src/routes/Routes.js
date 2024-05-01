import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import AddProject from "../pages/AddProject/AddProject";
import { useSelector } from "react-redux";

const Routing = () => {
    const {user} = useSelector(state => state);
    return (
        // <RouterProvider router={router}/>
        <BrowserRouter >
            <Routes>
                <Route  path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/details/:id" element={user ? <Details/> : <Navigate to="/login"/>}/>
                <Route path="/add" element={user ? <AddProject/> : <Navigate to="/login"/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;