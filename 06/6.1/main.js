function printElement(products)
{
    const h1Element = document.querySelector('.products'); // получили элемент ul

    for (let i = 0; i < products.length; i++) // итерируемся по списку товаров
    {
        const LiElement = document.createElement('li'); // Создали список из элемнетов тега li
        LiElement.textContent = products[i]; // добавляем в созданный список элементов li  товары из списка products
        h1Element.append(LiElement); // добавляем в элемент ul  список тегов li  с товарами
    }
    
}