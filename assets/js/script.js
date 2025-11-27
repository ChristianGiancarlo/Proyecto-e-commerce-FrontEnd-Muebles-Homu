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

products.forEach(product => {
    const card = `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card shadow-sm h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="">${product.description}</p>
                    <p class="text-muted">$${product.price.toLocaleString()}</p>
                    <button class="btn btn-dark w-100 add-to-cart" data-id="${product.id}">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    `;
    productsContainer.innerHTML += card;
});

