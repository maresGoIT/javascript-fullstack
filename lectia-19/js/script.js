import API from './api.js';
import data from './data.js';

const form = document.getElementById('form');
const loadingSpinner = document.querySelector('#loading');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputValue = form.elements.news.value;

  API.getNews(inputValue)
    .then(data => {
      console.dir(data);
      const { articles } = data;
      loadingSpinner.classList.toggle('hidden');
      if (articles.length === 0) {
        showError();
      }

      return articles.reduce((markup, article) => createMarkup(article) + markup, '');
    })
    .then(markup => updateNewsList(markup))
    .catch(onError)
    .finally(() => {
      loadingSpinner.classList.toggle('hidden');
      form.reset();
    });
}

function createMarkup(article) {
  const { author, title, description, url, urlToImage } = article;

  return `
        <div class="article-card">
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${author || 'Anonym'}</h3>
            <img src=${urlToImage} class="article-img">
            <p class="article-description">${description}</p>
            <a href=${url} class="article-link" target="_blank">Read more</a>
        </div>
        `;
}

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}

function showError() {
  console.error('No results');
  updateNewsList('<p>Articles not found</p>');
}

function onError(err) {
  console.error(err);
}
