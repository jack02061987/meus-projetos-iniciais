const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let  colorIndex=0;
let intervalId = null;



const trafficLight = (event)=>{
    stopAutomatic();
    turnOn[event.target.id]();
    

}

const nextIndex = ()=> colorIndex = colorIndex < 2 ? ++colorIndex : 0;
 

const changecolor = ()=> {
    const colors = ['red','yellow','grenn']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () => {
    clearInterval( intervalId) ;
}
const turnOn ={
    'red':      ()=> img.src ='./img/vermelho.png',
    'yellow':   ()=> img.src ='./img/amarelo.png',
    'grenn':    ()=> img.src ='./img/verde.png',
    'automatic':()=> intervalId = setInterval(changecolor, 1000)
}
buttons.addEventListener('click', trafficLight)