import React from "react";

interface Props {
   classname?: string;
   children?: React.ReactNode;
}

function Banner({ classname, children }: Props) {
   return <div className={classname}>{children}</div>;
}

export default Banner;
