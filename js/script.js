function velocidadeMedia(){
    let desloc = document.getElementById("desloc").value;
    let tempo = document.getElementById("tempo").value;
    let resulVelocMedia = document.getElementById("resulVelocMedia");

    let velMedia = desloc / tempo;
    resulVelocMedia.innerHTML = `Resultado: ${velMedia} m/s`;
}
function forcaResultante(){
    let massa = document.getElementById("massa").value;
    let aceleracao = document.getElementById("acel").value;
    let resulForca = document.getElementById("resulForca");

    let forca = massa * aceleracao;
    resulForca.innerHTML = `Resultado: ${forca} N`;
}
function energiaCinetica(){
    let massaCin = document.getElementById("massaCin").value;
    let velocCin = document.getElementById("velocidadeCin").value;
    let resulCin = document.getElementById("resulEnergiaCin");
    let energia = 0.5*massaCin*(velocCin*velocCin);
    resulCin.innerHTML = `Resultado: ${energia} J`;
}
function potenciaMecanica(){
    let energiaPot = document.getElementById("energiaPot").value;
    let tempoPot = document.getElementById("tempoPot").value;
    let resulPot = document.getElementById("resulPotencia");
    let potencia = energiaPot/tempoPot;
    resulPot.innerHTML = `Resultado: ${potencia} W`;
}
function pressao(){
    let forcaPress = document.getElementById("forcaPress").value;
    let areaPress = document.getElementById("areaPress").value;
    let resulPress = document.getElementById("resulPressao");
    let pressao = forcaPress/areaPress;
    resulPress.innerHTML = `Resultado: ${pressao} Pa`;
    
}