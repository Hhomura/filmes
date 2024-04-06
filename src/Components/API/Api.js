const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjNkN2E2MDU5NGNjODVmMjlmZGI4MzU2MDA0Mjg1YyIsInN1YiI6IjY2MTE1NmU5MWZhMWM4MDE3Y2QyNGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jA5F7Cfvjs_dLLN8-yK2nBsJNIdtrWsOVzTupAAYrUE");

const dados = []
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const response = fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc\"", requestOptions)
  .then((response) => response.text())
  .catch((error) => console.error(error));

const getAnoAtual = () => {
  const dataAtual = new Date();
  return dataAtual.getFullYear();
}

// Exemplo de uso
const anoAtual = getAnoAtual();


async function buscarFilmesPorAno(ano) {
  // Construindo a URL da requisição com o ano fornecido como parâmetro
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${ano}&sort_by=popularity.desc`;

  // Realizando a requisição
  return fetch(url, requestOptions)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao buscar filmes');
          }
          return response.json();
      })
      .then(data => {
          return data.results; // Retornando os resultados da busca
      })
      .catch(error => {
          console.error('Erro:', error);
          return []; // Retornando uma lista vazia em caso de erro
      });
}

const data = {
  response: response,
  buscarFilmesPorAno: buscarFilmesPorAno
}
export default data