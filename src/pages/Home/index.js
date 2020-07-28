import React from 'react';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import dadosIniciais from '../../data/dados_iniciais.json';



function Home() {
  return (
    <div style={{backgroundColor: "black"}}>
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[3].videos[0].titulo}
        url = {dadosIniciais.categorias[3].videos[0].url}
        videoDescription = {"One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e publicados em 96 volumes tankōbon pela editora Shueisha até abril de 2020. One Piece conta as aventuras de Monkey D."}
      />

      <Carousel 
        ingnoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[1]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[2]}
      />

      <Carousel 
        category = {dadosIniciais.categorias[3]}
      />

      <Footer />

    </div>
  );
}

export default Home;
