const productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));

const cartProducts = document.querySelector('.cart__products');


productQuantityControlDec.forEach(item => {
    item.addEventListener('click', () => {
        const productQuantityControls = item.closest('.product__quantity-controls');
        const productQuantityValue = productQuantityControls.querySelector('.product__quantity-value');
        let count = Number(productQuantityValue.textContent);
        if (count > 1) {
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
        let value = Number(product.querySelector('.product__quantity-value').textContent);
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));

        cartProduct.forEach(element => {
            if (element.dataset.id === idProduct) {
                let cartValue = Number(element.querySelector('.cart__product-count').textContent);
                value = cartValue + value;
                element.remove();
            }
        })

        cartProducts.innerHTML += `
            <div class="cart__product" data-id=${idProduct}>
                <img class="cart__product-image" src=${img}>
                <div class="cart__product-count"> ${value}</div>
            </div>
        `;
    })
});