import React from "react";
import "./App.css";
import { Footer } from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const content = "Hello";
  return (
    <div className="body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
