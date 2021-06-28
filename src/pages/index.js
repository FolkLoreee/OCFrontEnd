import { Router } from "@reach/router";
import React from "react";

import Landing from "components/Landing";
import Events from "components/Events";
import Participants from "components/Participants";

// import { AuthProvider } from "context/authContext";
// import OnlyPublicRoute from "routes/onlyPublicRoute";
// import OnlyPrivateRoute from "routes/onlyPrivateRoute";

const Index = () => {
  return (
    // <AuthProvider>
    <Router basepath="/">
      <Landing path="/landing" />
      <Participants path="/participants" />
      <Events path="/" />
    </Router>
    // </AuthProvider>
  );
};

export default Index;
