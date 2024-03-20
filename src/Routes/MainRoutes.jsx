import Error from "Pages/Error";
import Home from "Pages/Home";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}