/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const valoresIniciais = {
    titulo: 'Video Padrao',
    url: 'https://www.youtube.com/watch?v=vAV4Vy4jfkc',
    categoria: 'Reviews Animes favoritos',
  };

  const history = useHistory();
  const { valores, handleChange } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  console.log(categoryTitles);

  return (
    <PageDefault paddingAll={30} style={{ color: 'white' }}>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!');

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === valores.categoria,
        );

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            // console.log('Cadastrado o video');
            // utilizado para ir em outra rota
            history.push('/');
          });
      }}
      >

        <FormField
          label="Titulo do video: "
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do video: "
          name="url"
          type="text"
          value={valores.url}
          onChange={handleChange}
        />

        {/*
          categoryTitles é uma array com os titulos
          que vai ser passada como options no form field
          que é uma "datalist"
        */}
        <FormField
          label="Categoria: "
          name="categoria"
          type="text"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>Cadastrar</Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
