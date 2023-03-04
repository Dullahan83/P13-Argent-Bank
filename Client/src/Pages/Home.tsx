import React from "react";
import Banner from "../Components/Banner/Banner";
import Feature from "../Components/Feature/Feature";
import Layout from "../Layout/Layout";

interface Props {}

function Home(props: Props) {
   const {} = props;

   return (
      <Layout>
         <main>
            <Banner classname="hero">
               <section className="hero-content">
                  <h2 className="sr-only">Promoted Content</h2>
                  <p className="subtitle">No fees.</p>
                  <p className="subtitle">No minimum deposit.</p>
                  <p className="subtitle">High interest rates.</p>
                  <p className="text">
                     Open a savings account with Argent Bank today!
                  </p>
               </section>
            </Banner>
            <section className="features">
               <h2 className="sr-only">Features</h2>
               <Feature source="/img/icon-chat.png">
                  <h3 className="feature-item-title">
                     You are our #1 priority
                  </h3>
                  <p>
                     Need to talk to a representative? You can get in touch
                     through our 24/7 chat or through a phone call in less than
                     5 minutes.
                  </p>
               </Feature>
               <Feature source="/img/icon-money.png">
                  <h3 className="feature-item-title">
                     More savings means higher rates
                  </h3>
                  <p>
                     The more you save with us, the higher your interest rate
                     will be!
                  </p>
               </Feature>
               <Feature source="/img/icon-security.png">
                  <h3 className="feature-item-title">Security you can trust</h3>
                  <p>
                     We use top of the line encryption to make sure your data
                     and money is always safe.
                  </p>
               </Feature>
            </section>
         </main>
      </Layout>
   );
}

export default Home;
