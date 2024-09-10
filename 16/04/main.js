// Сохранение состояний уведомлений
let networkErrorShown = false;
let slowConnectionShown = false;

function sanitize(html) {
  const el = document.createElement('div');
  el.innerHTML = html;
  return el.textContent;
}

function renderNetworkError(message) {
  const app = document.getElementById("app");
  let errorEl = document.querySelector('.network-error');
  
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.classList.add('network-error');
    app.prepend(errorEl);
  }
  
  errorEl.innerHTML = `
    <div class="error">
      <div class="error-title">Упс... Возникла ошибка</div>
      <div class="error-message">${sanitize(message)}</div>
    </div>
  `;
}

function removeNetworkError() {
  const errorEl = document.querySelector('.network-error');
  if (errorEl) {
    errorEl.remove();
  }
}

async function checkNetworkStatus() {
  try {
    const startTime = Date.now();
    const response = await fetch('https://sb-film.skillbox.cc/ping', { method: 'POST' });

    if (!response.ok) {
      throw new Error('Проблема с сетью');
    }

    const duration = Date.now() - startTime;

    // Если ответ приходит дольше 500 миллисекунд, показываем сообщение о медленном соединении
    if (duration > 500) {
      if (!slowConnectionShown) {
        renderNetworkError('Медленное соединение');
        slowConnectionShown = true;
      }
    } else {
      slowConnectionShown = false;
      removeNetworkError();
    }

    // Соединение восстановилось
    networkErrorShown = false;
    removeNetworkError();

  } catch (error) {
    if (!networkErrorShown) {
      renderNetworkError('Неполадки с сетью');
      networkErrorShown = true;
    }
  }
}

// Функция будет опрашивать сервер каждые 5 секунд
setInterval(checkNetworkStatus, 5000);

// Функция для получения фильмов из localStorage
async function getFilms() {
  const films = localStorage.getItem('films');
  if (!films) 
  {
    throw new Error('Нет данных о фильмах');
  }
  return JSON.parse(films);
}

function renderTopBar(user) {
  const el = document.createElement('div');
  el.classList.add('topbar');

  el.innerHTML = `
    <span class="topbar-logo">Фильмотека</span>
    <div class="topbar-user user">
      <div class="user-name">${sanitize(user.name)}</div>
      <div class="user-email">${sanitize(user.email)}</div>
    </div>
  `;

  return el;
}

function renderFilms(films) {
  const el = document.createElement('div');
  el.classList.add('films');

  if (films.length === 0) {
    el.innerText = 'Cписок фильмов пока пуст';
    return el;
  }

  films.forEach((film) => {
    const filmEl = document.createElement('div');
    filmEl.classList.add('films-card');
    filmEl.dataset.watched = film.isWatched;

    filmEl.textContent = `${film.title} (${film.releaseYear})`;

    el.append(filmEl);
  });

  return el;
}

function renderGlobalError(message) {
  const app = document.getElementById("app");
  if (!app) {
    console.error('Элемент с id "app" не найден');
    return;
  }
  
  const errorEl = document.createElement('div');
  errorEl.classList.add('error');
  errorEl.innerHTML = `
    <div class="error-title">Упс... Возникла ошибка</div>
    <div class="error-message">${sanitize(message)}</div>
  `;
  
  app.append(errorEl);
}

function renderAuthForm(props) {
  const form = document.createElement('form');
  form.classList.add('authForm');

  form.innerHTML = `
    <label for="name">Ваше имя</label>
    <input id="name" type="text" name="name" required="true" placeholder="Василий" />
    <label for="email">Эл. почта</label>
    <input id="email" type="text" name="email" required="true" placeholder="example@mail.com" />
    <button class="authForm-submit" type="submit">Войти</button>
  `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    props.onSubmit(formProps);
  });

  return form;
}

function initAuth() {
  const app = document.getElementById("app");
  app.innerHTML = '';

  app.append(renderAuthForm({
    onSubmit: (user) => {
      setUser(user);
      initApp();
    }
  }));
}

async function initApp() {
  const app = document.getElementById("app");
  if (!app) {
    console.error('Элемент с id "app" не найден');
    return;
  }
  
  app.innerHTML = '';

  try {
    const user = getUser();
    if (!user) {
      initAuth();
      return;
    }
    const films = await getFilms();
    app.append(renderTopBar(user));
    app.append(renderFilms(films));
  } catch (error) {
    console.error(error);

    if (error.name === 'AuthError') {
      initAuth();
      return;
    }

    app.append(renderGlobalError(error.message));
  }
}

// Убедитесь, что функция getUser объявлена
let user;

function setUser(userData) {
  user = userData;
}

function getUser() {
  return user;
}

// Начальная инициализация
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
