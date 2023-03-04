import { Action } from "@remix-run/router";
import React from "react";

interface Props {
   classname: string;
   children: React.ReactNode;
   action?: () => void;
}

function Button({ classname, children, action }: Props) {
   return (
      <button
         className={classname}
         onClick={(e) => {
            e.preventDefault();
            action && action();
         }}
      >
         {children}
      </button>
   );
}

export default Button;
