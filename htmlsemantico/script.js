function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}
    function alterarCurso() {
         let trocarcurso = document.getElementById('inputcurso').value;
    if (trocarcurso === '') {
        alert('digite um curso!')  
       } else {
            document.getElementById('nomecurso').innerHTML = trocarcurso;

        }  

    }
    function alterarStatus() {
    let trocarstatus = document.getElementById('inputStatus').value;

    if (trocarstatus === '') {
        alert('Digite seu status!')
    } else {
        document.getElementById('nomeStatus').innerHTML = trocarstatus;
    }
}
function mudarCorHeader() {
    let cor = document.getElementById('corHeader').value;
    document.querySelector('.cabecalho').style.backgroudColor = cor;
}
function mudarCorNav() {
    let cor = document.getElementById('corNav').value;
    document.querySelector('.navegacao').style.backgroudColor = cor;
}

function mudarCorSesao() {
    let cor = document.getElementById('corSesao').value;
    document.querySelector('.secao').style.backgroudColor = cor;
}
function mudarCorFotter() {
    let cor = document.getElementById('corFotter').value;
    document.querySelector('.Fotter').style.backgroudColor = cor;
}
function mudarCorRodape() {
    let cor = document.getElementById('corRodape').value;
    document.querySelector('.rodape').style.backgroudColor = cor;
}












            
    