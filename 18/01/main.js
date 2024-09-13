// Функция, которая имитирует запрос на получение массива URL изображений
function loadImages(urlArray) 
{
  return new Promise((resolve) => 
  {
    const delay = Math.random() * (5000 - 2000) + 2000; // Случайная задержка от 2 до 5 секунд
    setTimeout(() => 
    {
      resolve(urlArray);
    }, delay);
  });
}

// Массивы с изображениями:
const imageSet1 = [
'https://picsum.photos/100/100?random=1',
'https://picsum.photos/101/100?random=2',
'https://picsum.photos/102/100?random=3',
];


const imageSet2 = [
  'https://placedog.net/100/100',
  'https://placedog.net/101/100',
  'https://placedog.net/102/100',
];

// Прогресс бар
const progressBar = document.querySelector('.progress');

function updateProgress(progress) 
{
  progressBar.style.width = progress + '%';
}

// Функция для вывода изображений
function displayImages(images, containerId) 
{
  const container = document.getElementById(containerId);
  images.forEach(url => 
  {
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
  });
}

// Выполняем запросы и отображаем изображения
Promise.all([loadImages(imageSet1), loadImages(imageSet2)])
  .then(([images1, images2]) => 
    {
        displayImages(images1, 'image-container-1');
        displayImages(images2, 'image-container-2');
    })
  .finally(() => updateProgress(100));

// Имитируем постепенное обновление прогресса
let progress = 0;
const interval = setInterval(() => 
{
  if (progress < 100) 
  {
    progress += 10;
    updateProgress(progress);
  }
   else 
   {
    clearInterval(interval);
  }
}, 300); // Обновляем каждые 300мс