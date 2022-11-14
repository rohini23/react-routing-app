import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { authContextInterface } from "../interfaces";

const Login: React.FC = () => {
  const { setUnauth } = useContext(AuthContext) as authContextInterface;
  useEffect(() => {
    setUnauth && setUnauth(true);
  }, [setUnauth]);
  return <div className="root">Login</div>;
};

export default Login;
