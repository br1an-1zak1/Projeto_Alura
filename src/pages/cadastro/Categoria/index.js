import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroCategoria(){
  return (
    <PageDefault style={{color: "white"}}>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text"/>
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}