import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";

interface Props {}

function ProtectedRoutes(props: Props) {
   //    const {} = props;
   const { isAuthenticated } = useAppSelector((store) => store.user);

   return (
      <>
         {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
         {/* <Outlet /> */}
      </>
   );
}

export default ProtectedRoutes;
