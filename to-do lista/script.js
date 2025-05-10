const selectInpt = document.getElementById('adicionar');
const selectBtn = document.getElementById('add');
const list = document.getElementById('lista');

selectBtn.addEventListener('click', () => {
    if (selectInpt.value.trim() === '') {
        const alerta = document.createElement('div');
        alerta.textContent = 'O campo não pode estar vazio!';
        alerta.classList = 'alerta';
        document.body.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 2000);
        return;
    }
    
    const item = document.createElement('li');
    const texto = document.createElement('p');
    const btn = document.createElement('button');
    const btn2 = document.createElement('button');

    btn.classList = 'btn';
    btn2.classList = 'btn';

    const img = document.createElement('img');
    img.src = 'https://images.icon-icons.com/1893/PNG/512/dustbin_120823.png';
    img.alt = 'lixeira';
    img.classList = 'img';

    const img2 = document.createElement('img');
    img2.src = 'https://images.icon-icons.com/259/PNG/128/ic_done_128_28244.png';
    img2.alt = 'check';
    img2.classList = 'img';

    texto.textContent = selectInpt.value;
    item.classList = 'new-task';

    btn.appendChild(img);
    btn2.appendChild(img2);
    item.appendChild(texto);
    item.appendChild(btn);
    item.appendChild(btn2);
    list.appendChild(item);

    btn.addEventListener('click', () => {
        item.remove();
    });

    btn2.addEventListener('click', () => {
        texto.style.textDecoration = 'line-through';
        texto.style.color = '#ccc';
        
    })

    limparCampoInpt();
});


const limparCampoInpt = () =>{
    selectInpt.value = '';
}


