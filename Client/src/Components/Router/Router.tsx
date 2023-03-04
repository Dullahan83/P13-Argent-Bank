import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";
import Profile from "../../Pages/Profile";
import SignIn from "../../Pages/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";
interface Props {}

function Router(props: Props) {
   const {} = props;

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route element={<ProtectedRoutes />}>
               <Route path="/profile" element={<Profile />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
