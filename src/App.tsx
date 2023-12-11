import React from "react";
import "./scss/app/app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Present from "./components/present/present";

function App() {
  return (
    <div className="App">
      <Header />
      <Present />
      <Footer />
    </div>
  );
}

export default App;
