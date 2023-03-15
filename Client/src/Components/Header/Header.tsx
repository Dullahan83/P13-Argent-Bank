import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hook";
import { logout } from "../../Redux/Slices/UserSlice";
interface Props {}

function Header(props: Props) {
   const {} = props;
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const { isAuthenticated } = useAppSelector((store) => store.user);
   const { firstName } = useAppSelector((store) => store.user.userInfos);

   function handleLogOut() {
      dispatch(logout());
      navigate("/");
   }
   return (
      <nav className="main-nav">
         <a className="main-nav-logo" onClick={() => navigate("/")}>
            <img
               className="main-nav-logo-image"
               src="/img/argentBankLogo.png"
               alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
         </a>
         {isAuthenticated ? (
            <div>
               <a
                  className="main-nav-item"
                  onClick={() => navigate("/profile/:id")}
               >
                  <i className="fa fa-user-circle"></i>
                  {firstName}
               </a>
               <a className="main-nav-item" onClick={() => handleLogOut()}>
                  <i className="fa fa-sign-out"></i>
                  Sign Out
               </a>
            </div>
         ) : (
            <div>
               <a className="main-nav-item" onClick={() => navigate("/login")}>
                  <i className="fa fa-user-circle"></i>
                  Sign In
               </a>
            </div>
         )}
      </nav>
   );
}

export default Header;
