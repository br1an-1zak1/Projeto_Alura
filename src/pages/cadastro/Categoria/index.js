import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import AnimationLoadings from '../../../components/AnimationLoadings';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

const Tabela = styled.table`
  /* width: 70%; */
  margin: 5% auto;
  border-spacing: 0;
  td, th{
    background-color: #53585D;
    width: 500px;
    padding: 10px;
  }
  td + td {
    text-align: center;
  }
  tbody{
    border-radius: 10%;
  }
`;

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [errors, setErrors] = useState({});
  const { valores, handleChange, clearForm } = useForm(valoresIniciais);
  const isValid = valores.nome.trim();

  useEffect(() => {
    // const URL_TOP = window.location.hostname.includes('localhost')
    //   ? 'http://localhost:8080/categorias'
    //   : 'https://bkflix.herokuapp.com/categorias';

    // fetch(URL_TOP)
    //   .then(async (res) => {
    //     const resposta = await res.json();
    //     setCategorias([...resposta]);
    //   });
    categoriasRepository.getAll()
      .then((res) => {
        setCategorias([...res]);
      });
  }, []);

  return (
    <PageDefault paddingAll={30} style={{ color: 'white' }}>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        if (!isValid) {
          setErrors({
            nome: true,
          });
          return;
        }

        setCategorias([...categorias, valores]);
        categoriasRepository.create({
          titulo: valores.nome,
          descricao: valores.descricao,
          cor: valores.cor,
        });
        clearForm();
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
        <Button marginall={30} as={Link} to="/">Ir para Home</Button>
        {errors.nome && (<span style={{ color: 'tomato' }}> O campo de nome está vazio. </span>)}
      </form>

      <Tabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>

        </thead>
        <tbody>
          {
            categorias.map((categoria) => (
              <tr key={`${categoria.titulo}`}>
                <td>{categoria.titulo}</td>
                <td>{categoria.descricao}</td>
                <td>
                  <input style={{ backgroundColor: '#53585D' }} disabled type="color" value={categoria.cor} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Tabela>

      {/* caso não haja categorias, será true e vai mostrar a div,
        se não, será false e não carrega a div */}
      {categorias.length === 0 && (<AnimationLoadings />)}

    </PageDefault>
  );
}
