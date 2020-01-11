function trocarTela(idHTML) {
    console.log(idHTML);
    //tem que abrir a tela da ficha
    localStorage['id'] = idHTML;
    window.open("ficha.html", "_self");
}

function carregaObjPeca(array) {
    return array[0];
}

const objeto = carregaObjPeca(pecas);

function resolveIdPeca(id) {
    return "peca" + id;
}

function criarTela() {
    var id = localStorage['id'];
    var idPeca = resolveIdPeca(id);
    var objPeca = objeto[idPeca];
    console.log(typeof id);
    document.title = "Peça nº" + id;
    var intID = parseInt(id);
    console.log(objPeca);
    var nomeDaPeca = id + ": " + objPeca.legenda;
    console.log(nomeDaPeca);

    //Nome da peça
    $("#nomeDaPeca").html(nomeDaPeca);

    //Imagem
    $("#imagemPrincipal").attr("src", objPeca.imagem);
    console.log(objPeca.imagem)

    //Legenda
    $("#legenda").html(objPeca.legenda);

    //Descrição
    $("#descricao").html(objPeca.descricao);

    //CitaçãoDescricao
    $("#citacaoDescricao").html(objPeca.citDescricao);

    //Estado
    $("#estado").html(objPeca.estado);

    //Sítio
    $("#sitio").html(objPeca.sitio);

    //Contexto
    $("#contexto").html(objPeca.contexto);

    //CitaçãoContexto
    $("#citacaoContexto").html(objPeca.citContexto);

    //Matéria Prima
    $("#materiaPrima").html(objPeca.materiaPrima);

    //Citação da Matéria Prima
    $("#citMateria").html(objPeca.citMateria);

    //Dimensões
    $("#dimensoes").html(objPeca.dimensoes);

    //Citação das Dimensões
    $("#citDimensoes").html(objPeca.citDimensoes);

    //Conservação
    $("#conservacao").html(objPeca.conservacao);

    //Citação da Conservação
    $("#citConservacao").html(objPeca.citConservacao);

    //Observações
    $("#observacoes").html(objPeca.observacoes);

    //Paradeiro
    $("#paradeiro").html(objPeca.paradeiro);

    //Citações de Paradeiro
    $("#citParadeiro").html(objPeca.citParadeiro);

    //Cavidade
    $("#cavidade").html(objPeca.cavidade);

    //Citação Cavidade
    $("#citacaoCavidade").html(objPeca.citCavidade);

    //Análise Ontográfica
    $("#analise").html(objPeca.analise);

    var imageGaleria = objPeca.galeria;
    var citacaoGaleria = objPeca.citGaleria;
    console.log(imageGaleria);
    console.log(citacaoGaleria);

    for (i=0; i<imageGaleria.length; i++) {
        //Cria os elementos
        var divColunas = document.createElement("div");
        var a = document.createElement("a");
        var divCard = document.createElement("div");
        var divBody = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");

        //Adiciona as classes
        divColunas.classList.add('col-lg-2', 'col-md-4', 'col-6');
        a.classList.add('d-block', 'mb-2', 'h-100');
        divCard.classList.add('card', 'text-center', 'width12');
        divBody.classList.add("card-body");
        img.classList.add('card-img-top', 'img-thumb');
        p.classList.add("card-text");
    

        //Muda as informações
        img.src = imageGaleria[i];
        p.innerHTML = citacaoGaleria[i];

        //coloca os elementos na tela
        var estrutura = document.querySelector("#estruturaGaleria");
        console.log(estrutura);
        estrutura.appendChild(divColunas);
        divColunas.appendChild(a);
        a.appendChild(divCard);
        divCard.appendChild(divBody);
        divBody.appendChild(img);
        divBody.appendChild(p);
    }
}


