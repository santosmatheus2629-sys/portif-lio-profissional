// ==========================
// CONSULTA DE CEP
// ==========================

async function buscarCEP() {

    let cep = document.getElementById("cep").value;

    if (cep == "") {
        alert("Digite um CEP.");
        return;
    }

    try {

        let resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");

        let dados = await resposta.json();

        if (dados.erro) {

            document.getElementById("resultadoCEP").innerHTML =
                "<p>CEP não encontrado.</p>";

            return;
        }

        document.getElementById("resultadoCEP").innerHTML = `
            <p><strong>Rua:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;

    } catch {

        document.getElementById("resultadoCEP").innerHTML =
            "<p>Erro ao consultar o CEP.</p>";

    }

}


// ==========================
// CONSULTA DE DDD
// ==========================

async function buscarDDD() {

    let ddd = document.getElementById("ddd").value;

    if (ddd == "") {
        alert("Digite um DDD.");
        return;
    }

    try {

        let resposta = await fetch("https://brasilapi.com.br/api/ddd/v1/" + ddd);

        let dados = await resposta.json();

        let cidades = "";

        for (let i = 0; i < dados.cities.length; i++) {

            cidades += "<li>" + dados.cities[i] + "</li>";

        }

        document.getElementById("resultadoDDD").innerHTML = `
            <p><strong>Estado:</strong> ${dados.state}</p>
            <p><strong>Cidades:</strong></p>
            <ul>
                ${cidades}
            </ul>
        `;

    } catch {

        document.getElementById("resultadoDDD").innerHTML =
            "<p>Erro ao consultar o DDD.</p>";

    }

}


// ==========================
// CONSULTA DE BANCO
// ==========================

async function buscarBanco() {

    let codigo = document.getElementById("banco").value;

    if (codigo == "") {
        alert("Digite o código do banco.");
        return;
    }

    try {

        let resposta = await fetch("https://brasilapi.com.br/api/banks/v1/" + codigo);

        let banco = await resposta.json();

        document.getElementById("resultadoBanco").innerHTML = `
            <p><strong>Banco:</strong> ${banco.name}</p>
            <p><strong>Código:</strong> ${banco.code}</p>
            <p><strong>ISPB:</strong> ${banco.ispb}</p>
        `;

    } catch {

        document.getElementById("resultadoBanco").innerHTML =
            "<p>Banco não encontrado.</p>";

    }

}