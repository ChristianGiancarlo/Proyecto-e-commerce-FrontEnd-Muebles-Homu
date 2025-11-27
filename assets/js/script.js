const products = [
    {
        id: 1,
        name: "Silla Acolchonada",
        price: 39990,
        image: "assets/images/silla2Card.png",
        category: "Sillas",
        description: "Silla cómoda con estilo minimalista."
    },
    {
        id: 2,
        name: "Mueble",
        price: 74990,
        image: "assets/images/mueble2Card.png",
        category: "Muebles",
        description: "Mueble resistente y elegante."
    },
    {
        id: 3,
        name: "Mesa Dormitorio",
        price: 99990,
        image: "assets/images/mesaDormitorioCard.png",
        category: "Mesas",
        description: "Mesa dormitorio madera."
    },
    {
        id: 4,
        name: "Mueble Playa",
        price: 99990,
        image: "assets/images/mueble3Card.png",
        category: "Mesas",
        description: "Mueble 3 cuerpos."
    }
];

const productsContainer = document.getElementById("products-container");

if (productsContainer) {
    products.forEach(product => {
        const card = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p>${product.description}</p>
                        <div class="botones mt-auto">
                            <p class="text-muted">$${product.price.toLocaleString()}</p>
                            <button class="btn btn-dark w-100 add-to-cart" data-id="${product.id}">Agregar</button>
                            <button class="btn btn-warning w-100 btn-sm mt-1 ver-mas" data-id="${product.id}">Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += card;
    });
}

let cart = [];
let cartCount = 0;

const cartCountBadge = document.getElementById("cartCount");

document.addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        const id = e.target.dataset.id;

        const product = products.find(p => p.id == id);
        if (!product) return;

        cart.push(product);

        cartCount++;
        cartCountBadge.textContent = cartCount;
    }

    if (e.target.classList.contains("ver-mas")) {
        const id = e.target.dataset.id;

        localStorage.setItem("productoSeleccionado", id);

        window.location.href = "detalle.html";
    }
});

const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
const cartItemsContainer = document.getElementById("cartItems");

document.getElementById("openCart").addEventListener("click", () => {
    renderCartItems();
    cartModal.show();
});

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='text-muted'>Tu carrito está vacío.</p>";
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="d-flex align-items-center mb-3">
            <img src="${item.image}" class="me-3" width="60">
            <div>
                <p class="m-0 fw-bold">${item.name}</p>
                <small class="text-muted">$${item.price.toLocaleString()}</small>
            </div>
        </div>
    `).join("");
}

if (location.pathname.includes("detalle.html")) {
    const id = localStorage.getItem("productoSeleccionado");
    const product = products.find(p => p.id == id);

    if (product) {
        document.getElementById("detalle-title").textContent = product.name;
        document.getElementById("detalle-img").src = product.image;
        document.getElementById("detalle-price").textContent = "$" + product.price.toLocaleString();
        document.getElementById("detalle-desc").textContent = product.description;

        document.getElementById("btnAgregarDetalle").dataset.id = product.id;
    }
}