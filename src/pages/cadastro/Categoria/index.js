import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import AnimationLoadings from './style';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://bkflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([...resposta]);
      });
  }, []);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infoDoEvento) {
    // const {getAttribute, value} = infoDoEvento.target;
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  return (
    <PageDefault style={{ color: 'white' }}>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([...categorias, valores]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria: "
          name="nome"
          type="text"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria: "
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {/* caso não haja categorias, será true e vai mostrar a div,
        se não, será false e não carrega a div */}
      {categorias.length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AnimationLoadings />
        </div>
      )}

      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
