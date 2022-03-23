'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    const mes = document.getElementById('mes');
    const anos = document.getElementById('anos');
    
    
    
    
    const qtdSeguntos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)) ;
    const qtdMes = Math.floor(tempo / (60 * 60 * 60 *24) ) ;
    const qtdAnos = Math.floor(tempo / (60 * 60 * 60 * 360)) ;
 
    
    
    
    
    segundos.textContent = formatarDigito(qtdSeguntos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
    mes.textContent = formatarDigito(qtdMes);
    anos.textContent = formatarDigito(qtdAnos);
}

const contagemRegressiva = (tempo) =>{
    const pararContagem = ( )=> clearInterval(id);

    const contar = ()=>{
        if (tempo== 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    //1 de janeiro de 1970
    const dataEvento = new Date ('2025-02-16 13:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());

