import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Menu(){
  
  
  return (
    <nav className="Menu">

      {/*
        Para ter comportamento de SPA é necessário usar a funcao 'Link' no lugar da tag "a" e 'to' no do "href"
      */}
      <Link to="/" >
        <img className="Logo" src={Logo} alt="Logo Aniflix"/>
      </Link>

      {/* "as" que foi passado para que este componente se comporte como uma tag "a" (sendo que ele é uma constatnte de uma tag button) 
      <Button as="a" href="/cadastro/video" className="ButtonLink"> 
      */}

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Video
      </Button>
      
    </nav>

  );
};