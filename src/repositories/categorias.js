import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      // não é recomendado utiliar o throw, ele oferece erros genéricos
      // é recomendado tratar o erro aqui msm
      throw new Error('Não foi possível localizar os videos');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      // não é recomendado utiliar o throw, ele oferece erros genéricos
      // é recomendado tratar o erro aqui msm
      throw new Error('Não foi possível localizar os videos');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
