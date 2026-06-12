
document.getElementById("btnSaibaMais").addEventListener("click", () => {
    alert(
        "O Paraná está entre os estados líderes do agronegócio brasileiro, com destaque para soja, milho, carnes e cooperativismo."
    );
});

const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero => {
    numero.addEventListener("mouseover", () => {
        numero.style.color = "#ff9800";
    });

    numero.addEventListener("mouseout", () => {
        numero.style.color = "#1b5e20";
    });
});
