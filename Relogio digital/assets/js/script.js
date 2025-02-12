const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let segun = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) hr = '0' + hr;

    if(segun < 10) hr = '0' + hr;



    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = segun
})