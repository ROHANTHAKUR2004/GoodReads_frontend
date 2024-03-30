import Signin from "Pages/Auth/Signin";
import Signup from "Pages/Auth/Signup";
import Dasboard from "Pages/Dasboard";
import Error from "Pages/Error";
import Home from "Pages/Home";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/dashborad" element={<Dasboard/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}