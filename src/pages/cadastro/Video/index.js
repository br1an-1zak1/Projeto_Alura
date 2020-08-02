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
    titulo: '',
    url: '',
    categoria: '',
  };

  const history = useHistory();
  const { valores, handleChange } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const [errors, setErrors] = useState({});
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const isValid = categoryTitles.includes(valores.categoria);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  return (
    <PageDefault paddingAll={30} style={{ color: 'white' }}>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!');

        if (!isValid) {
          setErrors({ categories: true });
          return;
        }

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === valores.categoria,
        );

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            // **console.log('Cadastrado o video');
            // caso ocorra tudo certo...
            // é utilizado para ir em outra rota...
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

        <Button marginall={30} as={Link} to="/cadastro/categoria">
          Cadastrar Categoria
        </Button>

        {errors.categories && (<span style={{ color: 'tomato', paddingLeft: '20px' }}> Nome da categoria não é válido </span>)}

      </form>

    </PageDefault>
  );
}
