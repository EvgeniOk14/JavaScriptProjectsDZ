function addToCart(productName) {
    const cartElement = document.getElementById('cart'); // создаём элемент cart
    const listItem = document.createElement('li'); // создаём список товаров в корзине
    listItem.textContent = productName; // добавляем в корзину товар который выбрал пользователь
    cartElement.append(listItem); // добавляем список в корзину
}