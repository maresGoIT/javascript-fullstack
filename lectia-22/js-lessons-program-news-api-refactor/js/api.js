import { updateNewsList } from './markup.js';

const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'af0e766a1ccf475588965f28a4346fe4';

const getNews = async query => {
  try {
    const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);
    const response = await res.json();

    return response.articles;
  } catch (err) {
    updateNewsList(`<p>${err}</p>`);

    console.error(err);
  }
};

// async function getNews(query) {
//   const response = await axios.get(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);

//   return response.data.articles;
// }

export default { getNews };
