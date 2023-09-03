import React, { useContext } from "react";
import UserContext from "./UserContext";

function Content() {
  const authenticationDetails = useContext(UserContext);

  return (
    <>
      {authenticationDetails.isAuthenticated ? (
        <p>
          congratulations on successful authentication!
          {authenticationDetails.user?.username}
        </p>
      ) : (
        <p>Content will be shown only after authentication</p>
      )}
    </>
  );
}

export default Content;
