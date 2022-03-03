import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({component: Component, ...rest}) {
    const {loading,isAuth,users}=useSelector(state=>state.usersReducer)

    return (
        <Fragment>
      {!loading === true && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuth === false) {
              return <Redirect to="/login" />;
            }

            

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
    );
}

export default ProtectedRoute