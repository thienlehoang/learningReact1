import React from "react";
import Menu from "../../Menu/Menu";
import Header from './../../../common/Header/Header';
import Footer from './../../../common/Footer/Footer';

function MenuPage() {
  return (
    <div className="container py-20">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default MenuPage;
