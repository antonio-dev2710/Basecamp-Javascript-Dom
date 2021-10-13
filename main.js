
let meuBotao = document.getElementById('mode-selector')

let titulo=document.getElementById('page-title')

meuBotao.addEventListener("click", function () {
   
    changeContains()

});


function changeContains(){

    let fundo = document.getElementById('corpo')
    fundo.classList.toggle("fundo-pagina");

    if(fundo.classList.contains("fundo-pagina")){
        meuBotao.textContent = 'Modo Claro'

        titulo.textContent='Modo luz ON'
        
    }else{
        titulo.textContent='Modo luz OFF'
        meuBotao.textContent = 'Modo Escuro'
    }
    
}

