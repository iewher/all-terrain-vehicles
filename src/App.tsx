import React from "react";
import "./scss/app/app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Present from "./components/present/present";
import Emoji from "./components/emoji/emoji";
import Cards from "./components/cards/cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Present />
      <Emoji />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
