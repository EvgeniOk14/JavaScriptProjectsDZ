// Имитационная функция для имитации загрузки изображения со случайной задержкой
function mockLoadImages() 
{
    return new Promise((resolve) => 
    {
      const delay = Math.random() * (5000 - 2000) + 2000; // Random delay between 2 and 5 seconds
      setTimeout(() => 
      {
        resolve();
      }, delay);
    });
  }

  // Функция индикатора выполнения
  function progress(containerId, time) 
  {
    const progressBar = document.getElementById(containerId);
    const timeElapsedDiv = document.getElementById('time-elapsed-' + containerId.split('-')[2]);
    let secondsElapsed = 0;

    // минимальное время 2 секунды
    if (time < 2) time = 2;

    // Устанавливаем продолжительность анимации индикатора выполнения
    progressBar.style.transition = `width ${time}s linear`;

    // Запуск анимации индикатора выполнения
    requestAnimationFrame(() => 
    {
      progressBar.style.width = '100%';
    });

    // Возвращает обещание, которое выполняется по истечении заданного времени
    return new Promise((resolve) => 
    {
      let startTime = Date.now();
      function update() 
      {
        const elapsed = (Date.now() - startTime) / 1000;
        secondsElapsed = Math.floor(elapsed);
        if (secondsElapsed <= time) 
        {
          timeElapsedDiv.textContent = `${secondsElapsed} seconds elapsed`;
          requestAnimationFrame(update);
        }
         else 
         {
          resolve(); // Выполнение обещания по истечении указанного времени
        }
      }
      update();
    });
  }

  // Функция отображения изображений после завершения работы индикатора выполнения
  function displayImages(containerId, images) 
  {
    const container = document.getElementById(containerId);
    images.forEach(url => 
    {
      const img = document.createElement('img');
      img.src = url;
      container.appendChild(img);
    });
  }

  // Запуск макетных функций и индикаторов выполнения
  async function start() 
  {
    // Первая имитационная функция и индикатор выполнения
    await mockLoadImages();
    await progress('progress-bar-1', 5); // Установите индикатор выполнения на 1 на 5 секунд

    //  изображения для первого набора после завершения работы индикатора выполнения 1
    const imageSet1 = [
      'https://picsum.photos/100/100?random=1',
      'https://picsum.photos/101/100?random=2',
      'https://picsum.photos/102/100?random=3',
      ];
    displayImages('image-container-1', imageSet1);

    // Вторая имитационная функция и индикатор выполнения
    await mockLoadImages();
    await progress('progress-bar-2', 3); // Set progress bar 2 for 3 seconds

    // изображения для второго набора после завершения работы индикатора выполнения 2
    const imageSet2 = [
      'https://placedog.net/100/100',
      'https://placedog.net/101/100',
      'https://placedog.net/102/100',
    ];
    displayImages('image-container-2', imageSet2);
  }

  // Запуск процесса
  start();