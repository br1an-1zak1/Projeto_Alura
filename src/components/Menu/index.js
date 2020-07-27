import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

export default function Menu(){
  
  
  return (
    <nav className="Menu">
      <a href="/" >
        <img className="Logo" src={Logo} alt="Logo Aniflix"/>
      </a>

      {/* "as" que foi passado para que este componente se comporte como uma tag "a" (sendo que ele é uma constatnte de uma tag button) */}
      <Button as="a" href="/" className="ButtonLink">
        Novo Video
      </Button>
      
    </nav>

  );
};