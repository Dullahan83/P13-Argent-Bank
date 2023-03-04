import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import Layout from "../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import { LoginUser, retrieveUserInfos } from "../Redux/Slices/UserSlice";
interface Props {}

function SignIn(props: Props) {
   const {} = props;
   const [password, setPassword] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [demo, setDemo] = useState<string>("");
   const { isAuthenticated, userInfos, token } = useAppSelector(
      (store) => store.user
   );
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   function handleSubmit() {
      const body = {
         email: email,
         password: password,
      };
      dispatch(LoginUser(body)).then(handleRedirect);
   }
   function handleRedirect() {
      navigate("/dashboard");
   }
   return (
      <Layout>
         <main className="main bg-dark">
            <section className="sign-in-content">
               <i className="fa fa-user-circle sign-in-icon"></i>
               <h1>Sign In</h1>
               <form>
                  <div className="input-wrapper">
                     <label htmlFor="username">Username</label>
                     <input
                        type="text"
                        id="username"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <div className="input-remember">
                     <input type="checkbox" id="remember-me" />
                     <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <Button classname="sign-in-button" action={handleSubmit}>
                     Sign In
                  </Button>
               </form>
            </section>
         </main>
      </Layout>
   );
}
export default SignIn;
