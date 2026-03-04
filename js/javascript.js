var campoCep = document.getElementById('cep');
if (campoCep) {
    campoCep.addEventListener('blur', function () {
        let valorCep = campoCep.value;
        fetch("https://viacep.com.br/ws/" + valorCep + "/json/")
            .then(response => response.json())
            .then(data => {
                let campoCidade = document.getElementById('cidade');
                let campoEstado = document.getElementById('estado');
                if (campoCidade) campoCidade.value = data.localidade || '';
                if (campoEstado) campoEstado.value = data.uf || '';
                mudaBorda(0);
            })
            .catch(error => mudaBorda(1));
    });
}

function mudaBorda(cor) {
    if (campoCep) {
        campoCep.style.border = (cor == 1) ? '2px solid red' : '2px solid green';
    }
}
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const senhaCorreta = "13042009<3";
        const campoPromo = document.getElementById("promo");

        if (campoPromo.value.trim() === senhaCorreta) {
            window.location.href = "premio.html";
        } else {
            alert("Código inválido! Verifique se você digitou corretamente.");
        }
    });
}

