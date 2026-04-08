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

            
    