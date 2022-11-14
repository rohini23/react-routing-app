import React, { createContext, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import { AuthContext } from "./context/authContext";

function App() {
  const [isUnauth, setUnauth] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider value={{ isUnauth, setUnauth }}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Main />
          </Suspense>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
