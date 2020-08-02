import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);
  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infoDoEvento) {
    // const {getAttribute, value} = infoDoEvento.target;
    // forma de deixa o código mais genérico
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    clearForm,
    valores,
    handleChange,
  };
}

export default useForm;
