// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const sectionCarts = document.createElement('section');
sectionCarts.classList.add('carts-section');
document.body.appendChild(sectionCarts);

const cartsList = document.createElement('ul');
cartsList.classList.add('carts-list');
sectionCarts.appendChild(cartsList);

fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then(({carts}) => {
        for (let cart of carts) {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartsList.appendChild(cartItem);
            
            const basketList = document.createElement('ul');
            basketList.classList.add('basket-list');
            cartItem.appendChild(basketList);

            basketList.innerHTML = `<li class="basket-item">
                                        <h2 class="basket-title">Basket ID:</h2>
                                        <p class="basket-text">${cart.id}</p>
                                    </li>
                                    <li class="basket-item">
                                        <h2 class="basket-title">Total:</h2>
                                        <p class="basket-text">${cart.total}</p>
                                    </li>
                                    <li class="basket-item">
                                        <h2 class="basket-title">Discounted total:</h2>
                                        <p class="basket-text">${cart.discountedTotal}</p>
                                    </li>
                                    <li class="basket-item">
                                        <h2 class="basket-title">Total products:</h2>
                                        <p class="basket-text">${cart.totalProducts}</p>
                                    </li>
                                    <li class="basket-item">
                                        <h2 class="basket-title">Total quantity:</h2>
                                        <p class="basket-text">${cart.totalQuantity}</p>
                                    </li>
                                    <li class="basket-item">
                                        <h2 class="basket-title">User ID:</h2>
                                        <p class="basket-text">${cart.userId}</p>
                                    </li> `

            const productsList = document.createElement('ul');
            productsList.classList.add('products-list');
            cartItem.appendChild(productsList);

            for (let product of cart.products) {
                const productItem = document.createElement('li');
                productItem.classList.add('product-item');
                productItem.innerHTML = `<img src="${product.thumbnail}" alt="">
                                         <div class="product-info-block">
                                             <h2 class="product-title">${product.title}</h2> 
                                             <p class="product-subtitle">Discount percentage: <span class="product-text">${product.discountPercentage}</span></p>
                                             <p class="product-subtitle">Discounted total: <span class="product-text">${product.discountedTotal}</span></p>
                                             <p class="product-subtitle">ID: <span class="product-text">${product.id}</span></p>
                                             <p class="product-subtitle">Price: <span class="product-text">${product.price}</span></p>
                                             <p class="product-subtitle">Quantity: <span class="product-text">${product.quantity}</span></p>
                                         </div>`
                productsList.append(productItem);
            }
            cartsList.appendChild(cartItem);
        }
    })