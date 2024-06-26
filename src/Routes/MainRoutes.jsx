import Signin from "Pages/Auth/Signin";
import Signup from "Pages/Auth/Signup";
import Bookdescription from "Pages/BookDescription";
import Dasboard from "Pages/Dasboard";
import Error from "Pages/Error";
import Home from "Pages/Home";
import Shelf from "Pages/Shelf";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/dashborad" element={<Dasboard/>}></Route>
            <Route path="/book/description" element={<Bookdescription/>}></Route>
            <Route path="/shelf" element={<Shelf/>}></Route> 
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}