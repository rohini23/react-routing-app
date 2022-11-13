import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="app-wrapper">
            <Navigation />
            <Main />
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
