fetch("/api/productos")
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista-productos");

        data.forEach(producto => {
            const li = document.createElement("li");
                li.textContent = `${producto.nombre} - $${producto.precio}`;
                lista.appendChild(li);
            });
        })
    .catch(error => console.error("Error:", error));