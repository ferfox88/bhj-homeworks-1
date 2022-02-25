const productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));

const cartProducts = document.querySelector('.cart__products');


productQuantityControlDec.forEach(item => {
    item.addEventListener('click', () => {
        const productQuantityControls = item.closest('.product__quantity-controls');
        const productQuantityValue = productQuantityControls.querySelector('.product__quantity-value');
        let count = Number(productQuantityValue.textContent);
        if (count > 0) {
            count--;
            productQuantityValue.textContent = count;
        }
    })

});

productQuantityControlInc.forEach(item => {
    item.addEventListener('click', () => {
        const productQuantityControls = item.closest('.product__quantity-controls');
        const productQuantityValue = productQuantityControls.querySelector('.product__quantity-value');
        let count = Number(productQuantityValue.textContent);
        count++;
        productQuantityValue.textContent = count;
    })

});

productAdd.forEach(item => {
    item.addEventListener('click', () => {
        const product = item.closest('.product');

        const idProduct = product.dataset.id;
        const img = (product.querySelector('img')).getAttribute('src');
        const value = Number(product.querySelector('.product__quantity-value').textContent);

        let productCartElement = `
            <div class="cart__product" data-id=${idProduct}>
                <img class="cart__product-image" src=${img}>
                <div class="cart__product-count"> ${value}</div>
            </div>
        `;
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));


        cartProduct.forEach(element => {
            if (element.dataset.id === idProduct) {
                element.querySelector('.cart__product-count').textContent = value;
                element.remove();
            }
        })

        if (value > 0) {
            cartProducts.innerHTML += `
                <div class="cart__product" data-id=${idProduct}>
                    <img class="cart__product-image" src=${img}>
                    <div class="cart__product-count"> ${value}</div>
                </div>
            `;

        }
    })
});