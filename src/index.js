import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  // BrowserRouter tipo container que armazena as rotas
  // Switch é tipo um if que verifica qual a rota que está sendo acessada
  // Route é como declara cada página que existe no site

  // exact, pede para ser o path exatamente igual
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* quando não existir a rota será renderizado essa 404 */}
      <Route component={() => 'Erro 404'} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
