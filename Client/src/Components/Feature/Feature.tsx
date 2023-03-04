import React, { ReactNode } from "react";

interface Props {
   source: string;
   children: ReactNode;
}

function Feature({ source, children }: Props) {
   return (
      <div className="feature-item">
         <img src={source} alt="Chat Icon" className="feature-icon" />
         {children}
      </div>
   );
}

export default Feature;
