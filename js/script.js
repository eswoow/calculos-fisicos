function velocidadeMedia(){
    let desloc = document.getElementById("desloc").value;
    let tempo = document.getElementById("tempo").value;
    let resulVelocMedia = document.getElementById("resulVelocMedia");
    let velMedia = desloc / tempo;
    if (tempo <= 0){
        resulVelocMedia.innerHTML = `O tempo não pode ser menor ou igual a zero.`;
        return;
    }
    resulVelocMedia.innerHTML = `Resultado: ${velMedia} m/s`;
}
function forcaResultante(){
    let massa = document.getElementById("massa").value;
    let aceleracao = document.getElementById("acel").value;
    let resulForca = document.getElementById("resulForca");
    let forca = massa * aceleracao;
    if (massa < 0){
        resulForca.innerHTML = `A massa não pode ser negativa.`;
        return;
    }
    resulForca.innerHTML = `Resultado: ${forca} N`;
}
function energiaCinetica(){
    let massaCin = document.getElementById("massaCin").value;
    let velocCin = document.getElementById("velocidadeCin").value;
    let resulCin = document.getElementById("resulEnergiaCin");
    let energia = 0.5*massaCin*(velocCin*velocCin);
    if (massaCin < 0){
        resulCin.innerHTML = `A massa não pode ser negativa.`;
    }
    resulCin.innerHTML = `Resultado: ${energia} J`;
}
function potenciaMecanica(){
    let energiaPot = document.getElementById("energiaPot").value;
    let tempoPot = document.getElementById("tempoPot").value;
    let resulPot = document.getElementById("resulPotencia");
    let potencia = energiaPot/tempoPot;
    if (tempoPot <= 0){
        resulPot.innerHTML = `O tempo não pode ser menor ou igual a zero.`;
    }
    resulPot.innerHTML = `Resultado: ${potencia} W`;
}
function pressao(){
    let forcaPress = document.getElementById("forcaPress").value;
    let areaPress = document.getElementById("areaPress").value;
    let resulPress = document.getElementById("resulPressao");
    let pressao = forcaPress/areaPress;
    if (areaPress <= 0){
        resulPress.innerHTML = `A área não pode ser menor ou igual a zero.`;
    }
    resulPress.innerHTML = `Resultado: ${pressao} Pa`;
}