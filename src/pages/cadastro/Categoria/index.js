import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);
  

  function setValor(chave, valor){
    setValores({
      ...valores,
      [chave]: valor,
    })
  }

  function handleChange(infoDoEvento){
    // const {getAttribute, value} = infoDoEvento.target;
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value
    )
  }

  return (
    <PageDefault style={{ color: "white" }}>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([...categorias, valores]);
        setValores(valoresIniciais);
      }}>

        <FormField 
          descricao="Nome da categoria: "
          name="nome"
          type="text"
          value={valores.nome}
          onChange={ handleChange }
        />

        
        <div>
          <label>
            Descrição da Categoria:
            <textarea
              type="text"
              name="descricao"
              value={valores.descricao}
              onChange={ handleChange }
            />
          </label>
        </div>
        
        <FormField 
          descricao="Cor: "
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />


        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria.nome}_${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
