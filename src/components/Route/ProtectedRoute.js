import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({isAdmin,component: Component, ...rest}) {
    const {loading,isAuth,users}=useSelector(state=>state.usersReducer)

    return (
        <Fragment>
      {loading ===false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuth === false) {
              return <Redirect to="/login" />;
            }

            if (isAdmin === true && users.role !== "admin") {
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