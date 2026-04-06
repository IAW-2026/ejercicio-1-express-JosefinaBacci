document.getElementById("btn-frase").addEventListener("click", () => {

    fetch("/frase")
        .then(res => res.json())
        .then(data => {
            document.getElementById("resultado").textContent = data.frase;
        })
        .catch(error => console.error("Error:", error));

});