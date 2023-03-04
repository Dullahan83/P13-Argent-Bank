import React, { ReactNode } from "react";

interface Props {
   children: ReactNode;
}

function PageHeading({ children }: Props) {
   return (
      <>
         <div className="header">{children}</div>
      </>
   );
}

export default PageHeading;
