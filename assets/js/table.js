var data = {
    id:0,
    list:[

        { id:1, name:'Chave griffo' },
        { id:2, name:'Martelo' },
        { id:3, name:'Martelo' },
    ]
}

function render(){

    const tbody = document.getElementById('tabela-corpo')

    tbody.innerHTML = ''

    data.list.map( item => {

        const tr = document.createElement('tr')
        tr.innerHTML = '<td>$(item.id)</td><td>$(item.qtd)</td><td>$(item.mecanico)</td><td>$(item.status)</td>'

        tbody.appendChild(tr)
    })
}

function add(){

}

function edit(){

}

function del(){

}

window.addEventListener('load', e => {

    render();
    
})