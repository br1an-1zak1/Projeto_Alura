import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import AnimationLoadings from '../../components/AnimationLoadings';
import PageDefault from '../../components/PageDefault';

import categoriasRepository from '../../repositories/categorias';

// import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <AnimationLoadings />}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e publicados em 96 volumes tankōbon pela editora Shueisha até abril de 2020. One Piece conta as aventuras de Monkey D."
              />

              <Carousel ingnoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return (
          <Carousel key={categoria.id} category={categoria} />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[3].videos[0].titulo}
        url={dadosIniciais.categorias[3].videos[0].url}
        videoDescription="One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda.
        Os capítulos têm sido serializados na revista
        Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e
        publicados em 96 volumes tankōbon pela editora Shueisha até abril de 2020. One Piece
        conta as aventuras de Monkey D."
      />

      <Carousel
        ingnoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      /> */}
    </PageDefault>
  );
}

export default Home;
