import React from "react";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

function MenuPage() {
  return (
    <div className="container py-20">
      <Header></Header>
      <Menu></Menu>
      <Footer />
    </div>
  );
}

export default MenuPage;
