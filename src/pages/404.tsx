import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { authContextInterface } from "../interfaces";

const PageNotFount: React.FC = () => {
  const { setUnauth } = useContext(AuthContext) as authContextInterface;
  useEffect(() => {
    setUnauth && setUnauth(true);
  }, []);
  return <div className="root">Page Not Fount</div>;
};

export default PageNotFount;
