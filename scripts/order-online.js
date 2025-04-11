document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector(".quantity").innerText);
            const price = parseInt(item.getAttribute("data-price"));
            total += quantity * price;
        });
        totalPriceElement.innerText = `$${total}`;
    }

    cartItems.forEach(item => {
        const minusBtn = item.querySelector(".btn-minus");
        const plusBtn = item.querySelector(".btn-plus");
        const removeBtn = item.querySelector(".btn-remove");
        const quantityElement = item.querySelector(".quantity");
        const priceElement = item.querySelector(".price");

        plusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantityElement.innerText);
            quantity++;
            quantityElement.innerText = quantity;
            priceElement.innerText = `$${quantity * parseInt(item.getAttribute("data-price"))}`;
            updateTotal();
        });

        minusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantity--;
                quantityElement.innerText = quantity;
                priceElement.innerText = `$${quantity * parseInt(item.getAttribute("data-price"))}`;
                updateTotal();
            }
        });

        removeBtn.addEventListener("click", function () {
            item.remove();
            updateTotal();
        });
    });

    updateTotal();
});
