import React  from 'react';
import {Route} from "react-router-dom";
import LayoutInner from "./LayoutInner";

const CustomRoute = ({ Component, ...rest }) => {
    return (
     <>
       <Route
         {...rest}
         render={location => (
           <LayoutInner>
             <Component {...location} />
           </LayoutInner>
         )}
       />
     </>
    );
}

export default CustomRoute;