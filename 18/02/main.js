function progress(time) 
{
    const progressBar = document.getElementById('progress-bar');
    const timeElapsedDiv = document.getElementById('time-elapsed');
    let secondsElapsed = 0;

    // Минимальное время — 2 секунды
    if (time < 2) time = 2;

    // Устанавливаем анимацию на прогресс-бар, отвечает за плавное закрашивание в течение времени  элемента <div id="progress-bar">
    progressBar.style.transition = `width ${time}s linear`; // transition <-- плавно меняет свойство элемента, width <-- свойство которое анимируется, ${time}s <--- кол-во секунд, linear <--- равномерно 

    // Начинаем анимацию прогресс-бара,встроенная в браузер функция requestAnimationFrame() беспечивает плавность анимации и синхронизацию с частотой обновления экрана
    requestAnimationFrame(() => 
    {
        progressBar.style.width = '100%';
    });

    // Обновляем текст и анимацию
    return new Promise((resolve) => 
    {
        let startTime = Date.now(); // текущее время

        function update() // метод обновления отображения времени
        {
          const elapsed = (Date.now() - startTime) / 1000; // разница между текущим времененм и временем старта отрисовки
          secondsElapsed = Math.floor(elapsed); // округление значения elapsed
          if (secondsElapsed <= time) 
          {
            timeElapsedDiv.textContent = `течение времени: ${secondsElapsed} `;
            requestAnimationFrame(update); // requestAnimationFrame() — это встроенный метод браузера, который запланирует вызов функции update на следующем цикле обновления экрана
          }
           else 
           {
            resolve(); // Завершаем промис после достижения времени
          }
        }
        update();
      });
    }

    // Запуск прогресс-бара и работа с промисом
    progress(5).then(() => 
    {
      console.log('Progress bar completed');
    });

   