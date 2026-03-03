var campoCep = document.getElementById('cep');
campoCep.addEventListener('blur', function () {
    let valorCep = campoCep.value; // pegar o valor do campoCep
    fetch("https://viacep.com.br/ws/" + valorCep + "/json/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('localidade').value = data.localidade || '';
            document.getElementById('logradouro').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('estado').value = data.estado || '';
            mudaBorda(0)
        })
        .catch(error => mudaBorda(1));
});
function mudaBorda(cor) {
    if (cor == 1) {
        campoCep.style.border = '1px solid red';
    } else {
        campoCep.style.border = '1px solid green';
    }
}