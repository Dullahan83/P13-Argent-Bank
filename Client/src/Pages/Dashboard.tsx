import React, { useEffect, useState } from "react";
import Account from "../Components/Account/Account";
import Button from "../Components/Button/Button";
import PageHeading from "../Components/PageHeading/PageHeading";
import Layout from "../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import {
   retrieveUserInfos,
   updateProfileInfos,
} from "../Redux/Slices/UserSlice";

interface Props {}

function Dashboard(props: Props) {
   const {} = props;
   const test = useAppSelector((store) => store.user);
   const { firstName, lastName } = useAppSelector(
      (store) => store.user.userInfos
   );
   const [isEditing, setIsEditing] = useState<boolean>(false);
   const [firstname, setFirstname] = useState<string>(firstName);
   const [lastname, setLastname] = useState<string>(lastName);

   const dispatch = useAppDispatch();
   const { isAuthenticated, token } = useAppSelector((store) => store.user);

   useEffect(() => {
      dispatch(retrieveUserInfos(token));
   }, []);
   function handleClickUpdate() {
      const body = {
         firstName: firstname,
         lastName: lastname,
      };
      (firstname && lastname) != "" && dispatch(updateProfileInfos(body));
      setIsEditing(false);
   }
   function handleEdit() {
      isAuthenticated && setIsEditing((prev) => !prev);
   }
   function handleCancelEdit() {
      setIsEditing(false);
      setFirstname(firstName);
      setLastname(lastName);
   }
   function handleViewTransaction() {}

   return (
      <Layout>
         <main className="main bg-dark">
            <PageHeading>
               {!isEditing ? (
                  <h1>
                     Welcome Back
                     <br />
                     {firstName ? `${firstName} ${lastName}` : "Tony Jarvis"}
                  </h1>
               ) : (
                  <>
                     <h1>Welcome Back</h1>
                     <form className="edit-form">
                        <div>
                           <input
                              type="text"
                              placeholder={firstName}
                              aria-label="firstname"
                              className="edit-form-input"
                              value={firstname}
                              onChange={(e) =>
                                 setFirstname(
                                    e.target.value.trim().length
                                       ? e.target.value
                                       : firstName
                                 )
                              }
                           />
                           <input
                              type="text"
                              placeholder={lastName}
                              aria-label="lastname"
                              className="edit-form-input"
                              value={lastname}
                              onChange={(e) =>
                                 setLastname(
                                    e.target.value.trim().length
                                       ? e.target.value
                                       : lastName
                                 )
                              }
                           />
                        </div>
                        <div>
                           <Button
                              classname="edit-form-button"
                              action={handleClickUpdate}
                           >
                              Save
                           </Button>
                           <Button
                              classname="edit-form-button"
                              action={handleCancelEdit}
                           >
                              Cancel
                           </Button>
                        </div>
                     </form>
                  </>
               )}
               {!isEditing ? (
                  <Button classname="edit-button" action={handleEdit}>
                     Edit Name
                  </Button>
               ) : null}
            </PageHeading>
            <h2 className="sr-only">Accounts</h2>
            <Account>
               <section className="account">
                  <div className="account-content-wrapper">
                     <h3 className="account-title">
                        Argent Bank Checking (x8349)
                     </h3>
                     <p className="account-amount">$2,082.79</p>
                     <p className="account-amount-description">
                        Available Balance
                     </p>
                  </div>
                  <div className="account-content-wrapper cta">
                     <Button
                        classname="transaction-button"
                        action={handleViewTransaction}
                     >
                        View Transactions
                     </Button>
                  </div>
               </section>
            </Account>
            <Account>
               <section className="account">
                  <div className="account-content-wrapper">
                     <h3 className="account-title">
                        Argent Bank Savings (x6712)
                     </h3>
                     <p className="account-amount">$10,928.42</p>
                     <p className="account-amount-description">
                        Available Balance
                     </p>
                  </div>
                  <div className="account-content-wrapper cta">
                     <Button
                        classname="transaction-button"
                        action={handleViewTransaction}
                     >
                        View Transactions
                     </Button>
                  </div>
               </section>
            </Account>
            <Account>
               <section className="account">
                  <div className="account-content-wrapper">
                     <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                     </h3>
                     <p className="account-amount">$184.30</p>
                     <p className="account-amount-description">
                        Current Balance
                     </p>
                  </div>
                  <div className="account-content-wrapper cta">
                     <Button
                        classname="transaction-button"
                        action={handleViewTransaction}
                     >
                        View Transactions
                     </Button>
                  </div>
               </section>
            </Account>
         </main>
      </Layout>
   );
}

export default Dashboard;
