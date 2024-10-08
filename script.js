AOS.init(); //inicial a animação
const medio = document.querySelectorAll('.with-js')
const small = document.querySelectorAll('.with-small-js')
const limitSmall = 5
const limitMedio = 50

for (let x of medio) {
    const upLimit = x.innerText.length > limitMedio
    const dotsEmpty = upLimit ? '...' : ''
    x.innerText = x.innerText.substring(0, limitMedio) + dotsEmpty
}

for (let x of small) {
    const upLimit = x.innerText.length > limitSmall
    const dotsEmpty = upLimit ? '...' : ''
    x.innerText = x.innerText.substring(0, limitSmall) + dotsEmpty
}

/* MODAL */
let btnPrimary = document.querySelector('.btn');
let btnFechar = document.querySelector('.fechar');
const modal = document.querySelector("#janela-modal");
const btnCad = document.querySelector("#cadastrar");

btnCad.onclick = () => {
    toastr.success('Tarefa cadastrada com Sucesso!', "Sucesso")
    modal.classList.remove('abrir')

    setTimeout( () => {
        window.location.reload()
    }, 500)
}

function abrirModal() {
    // let nav = document.querySelector('nav')
    // nav.style.display = "none"
    btnPrimary.style.display = "none";
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
            btnPrimary.style.display = "block";
        }
    })
}

let btnPendente = document.querySelector('#pendente')
let btnFazendo = document.querySelector('#fazendo')
let btnFeito = document.querySelector('#feito')
let label = document.querySelector('totipe')

btnPendente.addEventListener('mouseenter', function(e){
    e.preventDefault()

})