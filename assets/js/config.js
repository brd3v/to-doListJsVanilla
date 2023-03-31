console.log('estou aqui')

const btn = document.querySelector('#salvar')


var n = document.querySelector('#n')


function oo() {

    var li = document.querySelector('#n #m')
    n.removeChild(li)
    console.log('fui clicado')
}


btn.addEventListener('click', function (e) {
    e.preventDefault

    const task = document.querySelector("#task")
    const value = task.value
    if (value === '') {
        console.log('escreva uma tarefa')
    } else {
        var lista = document.getElementById('n').innerHTML
        lista = lista + `<li id='m'>${value} <input id="excluir" type='submit' onclick="oo()"value="x"> </li>`
        document.getElementById('n').innerHTML = lista
    }
}
)




