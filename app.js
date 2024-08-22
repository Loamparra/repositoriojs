function loadStorage() {
    const storedProducts = localStorage.getItem('products');
    const storedSales = localStorage.getItem('sales');
    return {
        products: storedProducts ? JSON.parse(storedProducts) : [],
        sales: storedSales ? JSON.parse(storedSales) : []
    };
}

function saveStorage(products, sales) {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('sales', JSON.stringify(sales));
}

let { products, sales } = loadStorage();

function renderProductList() {
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <span>${product.name} - Stock: ${product.stock} - $${product.price.toFixed(2)}</span>
            <button onclick="showEditForm(${index})" class="btn btn-success">Editar</button>
            <button onclick="sellProduct(${index})" class="btn btn-danger">Vendido</button>
        `;
        productListDiv.appendChild(productDiv);
    });
}

function renderSoldList() {
    const soldListDiv = document.getElementById('soldList');
    soldListDiv.innerHTML = '';

    let totalSales = 0;
    sales.forEach(sale => {
        const soldDiv = document.createElement('div');
        soldDiv.className = 'sold-item';
        soldDiv.innerHTML = `${sale.name} - $${sale.price.toFixed(2)}`;
        soldListDiv.appendChild(soldDiv);
        totalSales += sale.price;
    });

    document.getElementById('totalSales').textContent = `Total Ventas: $${totalSales.toFixed(2)}`;
}

function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const stock = parseInt(document.getElementById('productStock').value, 10);
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name && !isNaN(stock) && stock >= 0 && !isNaN(price) && price >= 0) {
        products.push({ name, stock, price });
        saveStorage(products, sales);
        clearProductInputs();
        renderProductList();
    } else {
        showError('Por favor, ingrese valores válidos.');
    }
}

function clearProductInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productPrice').value = '';
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <span>${product.name} - Stock: ${product.stock} - $${product.price.toFixed(2)}</span>
            <button onclick="showEditForm(${index})" class="btn btn-dark">Editar</button>
            <button onclick="sellProduct(${index})" class="btn btn-danger">Vendido</button>
        `;
        productListDiv.appendChild(productDiv);
    });
}

function showEditForm(index) {
    const product = products[index];
    const editFormHTML = `
        <div id="editForm">
            <h2>Editar Producto</h2>
            <input type="text" id="editName" class="input-field" value="${product.name}">
            <input type="number" id="editStock" class="input-field" value="${product.stock}" step="1">
            <input type="number" id="editPrice" class="input-field" value="${product.price}" step="0.01">
            <button onclick="updateProduct(${index})" class="btn btn-dark">Actualizar</button>
            <button onclick="cancelEdit()" class="btn btn-dark">Cancelar</button>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('beforeend', editFormHTML);
}

function updateProduct(index) {
    const name = document.getElementById('editName').value.trim();
    const stock = parseInt(document.getElementById('editStock').value, 10);
    const price = parseFloat(document.getElementById('editPrice').value);

    if (name && !isNaN(stock) && stock >= 0 && !isNaN(price) && price >= 0) {
        products[index] = { name, stock, price };
        saveStorage(products, sales);
        document.getElementById('editForm').remove();
        renderProductList();
    } else {
        showError('Por favor, ingrese valores válidos.');
    }
}

function cancelEdit() {
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.remove();
    }
}

function increasePrices() {
    const percentage = parseFloat(document.getElementById('priceIncrease').value);
    if (!isNaN(percentage)) {
        products = products.map(product => {
            product.price += product.price * (percentage / 100);
            return product;
        });
        saveStorage(products, sales);
        renderProductList();
    } else {
        showError('Por favor, ingrese un porcentaje válido.');
    }
}

function sellProduct(index) {
    const product = products[index];
    if (product.stock > 0) {
        const soldProduct = { ...product, stock: 1 };
        sales.push(soldProduct);
        products[index].stock -= 1;

        saveStorage(products, sales);
        renderProductList();
        renderSoldList();
    } else {
        showError('El producto está fuera de stock.');
    }
}

function clearSoldList() {
    sales = [];
    saveStorage(products, sales);
    renderSoldList();
}

function showError(message) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message
    });
}

function showSuccess(message) {
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: message
    });
}

document.getElementById('clearSoldListButton').addEventListener('click', clearSoldList);

renderProductList();
renderSoldList();