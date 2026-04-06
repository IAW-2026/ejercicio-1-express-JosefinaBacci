document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    fetch("/api/contacto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, mensaje })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("respuesta").textContent = data.respuesta;
    })
    .catch(err => console.error("Error:", err));
});