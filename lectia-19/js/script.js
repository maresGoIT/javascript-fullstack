import API from './api.js';

const form = document.getElementById('form');
const loadingSpinner = document.querySelector('#loading');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const inputValue = form.elements.news.value;

  loadData(inputValue, form);
}

function loadData(searchTerm) {
  showLoading();

  API.getNews(searchTerm)
    .then(data => {
      const { articles } = data;

      if (articles?.length === 0) {
        showError();
      }

      return articles.reduce((markup, article) => createMarkup(article) + markup, '');
    })
    .then(markup => updateNewsList(markup))
    .catch(onError)
    .finally(() => {
      hideLoading();
      form.reset();
    });
}

function hideLoading() {
  loadingSpinner.classList.add('hidden');
}

function showLoading() {
  loadingSpinner.classList.remove('hidden');
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
