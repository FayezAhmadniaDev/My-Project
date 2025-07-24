document.querySelectorAll(".card").forEach((card) => {
  const detailsBtn = card.querySelector("#toggleDetailsBtn");
  const modal = card.querySelector("#modalDetails");
  const h1Elem = card.querySelector("#title");
  const lessDetail = card.querySelector("#less-details");
  const detailsIcon = card.querySelector("#flash-icon");
  const decreaseBtn = card.querySelector("#decrease");
  const increaseBtn = card.querySelector("#increase");
  const quantitySpan = card.querySelector("#quantity");
  const addToCartBtn = card.querySelector("#addToCart");
  const numberOfProducts = card.querySelector("#numberOfProducts");
  const priceContainer = card.querySelector("#price");

  let quantity = 1;

  detailsBtn.addEventListener("click", () => {
    const isHidden = modal.classList.contains("hidden");

    if (isHidden) {
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.remove("scale-95", "opacity-0");
        modal.classList.add("scale-100", "opacity-100");
      }, 10);
    } else {
      modal.classList.remove("scale-100", "opacity-100");
      modal.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    }

    h1Elem.classList.toggle("hidden");
    lessDetail.classList.toggle("hidden");
    addToCartBtn.classList.toggle("hidden");
    priceContainer.classList.toggle("hidden");

    detailsIcon.classList.toggle("fa-chevron-down");
    detailsIcon.classList.toggle("fa-times");
  });

  addToCartBtn.addEventListener("click", () => {
    numberOfProducts.classList.toggle("hidden");
    setTimeout(() => {
      numberOfProducts.classList.remove("scale-95", "opacity-0");
      numberOfProducts.classList.add("scale-100", "opacity-100");
    }, 10);

    quantity = 1;
    quantitySpan.textContent = quantity;

    h1Elem.classList.toggle("hidden");
    lessDetail.classList.toggle("hidden");
    detailsBtn.classList.toggle("hidden");
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
  });
});
