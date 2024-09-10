function hello() 
{
   console.log('Skill');
}

  try 
  { 
    helo(); // Ошибка, т.к. этой функции нет
  } 
  catch (error) 
  {
    console.error('Ошибка: ', error.message); // Вывод сообщения об ошибке
  }
  console.log('complete');
  
   hello();