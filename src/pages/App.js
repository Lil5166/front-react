import React from 'react';
import Header from '../components/header/Header';
import Content from '../components/content/Content';
import GoodsGallery from "../components/goodsGallery/GoodsGallery";

function App() {
  return (
      <div className="container mt-5">
        <Header />
        <Content />
        <h2>Галерея товарів</h2>
        <GoodsGallery />
      </div>
  );
}

export default App;