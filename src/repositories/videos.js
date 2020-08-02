import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      // não é recomendado utiliar o throw, ele oferece erros genéricos
      // é recomendado tratar o erro aqui msm
      throw new Error('Não foi possível cadastrar os videos');
    });
}

export default {
  create,
};
