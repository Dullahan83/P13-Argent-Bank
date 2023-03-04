import React, { ReactNode } from "react";
import Button from "../Button/Button";

interface Props {
   children?: ReactNode;
}

function Account({ children }: Props) {
   return (
      <>
         {children ? (
            children
         ) : (
            <section className="account">
               <div className="account-content-wrapper">
                  <h3 className="account-title">{/* data */}</h3>
                  <p className="account-amount">{/* data */}</p>
                  <p className="account-amount-description">
                     Available Balance
                  </p>
               </div>
               <div className="account-content-wrapper cta">
                  <Button classname="transction-button">
                     View Transactions
                  </Button>
               </div>
            </section>
         )}
      </>
   );
   // <section className="account">
   //    <div className="account-content-wrapper">
   //       <h3 className="account-title">Argent Bank Checking (x8349)</h3>
   //       <p className="account-amount">$2,082.79</p>
   //       <p className="account-amount-description">Available Balance</p>
   //    </div>
   //    <div className="account-content-wrapper cta">
   //       <button className="transaction-button">View transactions</button>
   //    </div>
   // </section>

   // <div className="account-content-wrapper">{children}</div>;
}

export default Account;
