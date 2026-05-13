let imagemSelecionada = 1;

const imagemVisualizacao = document.getElementById("imagemVisualizacao");

function atualizarImagemSelecionada(){
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;

    imagemVisualizacao.src = "./img/"+"img-"+ imagemSelecionada + ".png";
}