document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    fetch("/saludo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("respuesta").textContent = data.mensaje;
    })
    .catch(err => console.error("Error:", err));
});