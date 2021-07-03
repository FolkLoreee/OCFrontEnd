import { Router } from "@reach/router";
import React from "react";

import Landing from "components/Landing";
import Events from "components/Events";
import Participants from "components/Participants";

import { AuthProvider } from "context/authContext";
import OnlyPublicRoute from "routes/onlyPublicRoute";
import OnlyPrivateRoute from "routes/onlyPrivateRoute";

const Index = () => {
  return (
    <AuthProvider>
      <Router basepath="/">
        <OnlyPublicRoute component={Landing} path="/" />
        <OnlyPrivateRoute component={Participants} path="/participants" />
        <OnlyPrivateRoute component={Events} path="/events" />
      </Router>
    </AuthProvider>
  );
};

export default Index;
