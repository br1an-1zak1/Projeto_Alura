import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  height: calc(100vh - var(--bodyPaddingTop));
`;

export default function Page404() {
  const [texto, setTexto] = useState([]);
  // const [quantidadePercorrido, setQuantidadePercorrido] = useState(0);
  useEffect(() => {
    function writer(string) {
      // console.log(string);

      const stringArr = Array.isArray(string)
        ? string
        : string.split('');

      if (stringArr.length !== 0) {
        setTexto((t) => [...t, stringArr[0]]);

        setTimeout(() => writer(stringArr.slice(1)), 300);
      }
    }

    writer(['Erro 404'][0]);
  }, []);

  // componentDidMount() {
  //   this.typeWriter(
  //     this.props.inputStrings[0],
  //     [].concat(this.props.inputStrings)
  //   );
  // }

  // typeWriter(string, words) {
  //   if (string.length === 0) {
  //     words = words.slice(1);
  //     words[0] && this.typeWord(words[0], words);
  //   } else {
  //     this.setState((state, props) => ({
  //       typed: state.typed.concat(string[0])
  //     }));

  //     setTimeout(() => this.typeWriter(string.slice(1), words), 300);
  //   }
  // }

  return (
    <PageDefault>
      <div />
      <Container>
        {/* {console.log(typeof texto, texto)} */}

        {/* {console.log(texto[0])} */}

        <h1>{texto}</h1>
        <p>Página não encontrada</p>
      </Container>

    </PageDefault>
  );
}
