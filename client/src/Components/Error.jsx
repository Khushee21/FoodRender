import React from "react";
import { useRouteError } from "react-router-dom";

const Error=() => {

    const err=useRouteError();
   console.log(err);

   return(
    <div>
        <h1>oooooooooooooooooooooops!</h1>
        <h2>Something went wront</h2>
    </div>
   );
};

export default Error;