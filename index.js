
function encriptar(){
    let texto = getTextAreaValue();

    if(soloLetrasMinusculas(texto))
        texto = cambiarLetrasEncriptar(texto);
    else 
        mensajeDeAlerta(texto);
}

function desencriptar(){
    let texto = getTextAreaValue();

    if(soloLetrasMinusculas(texto))
        texto = cambiarLetrasDesencriptar(texto);
    else 
        mensajeDeAlerta(texto);
}

function cambiarLetrasEncriptar(texto){
    let matrizCodigo =[['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]

    for(let i = 0; i < matrizCodigo.length; i++)
        if(texto.includes(matrizCodigo[i][0]))
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    
    mostrartexto(texto);
}

function cambiarLetrasDesencriptar(texto){
    let matrizCodigo =[['enter', 'e'],['imes','i'],['ai','a'],['ober','o'],['ufat','u']]

    for(let i = 0; i < matrizCodigo.length; i++)
        if(texto.includes(matrizCodigo[i][0]))
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    
    mostrartexto(texto);
}


function getTextAreaValue(){
    let textarea = document.getElementById('textArea');
    let valor = textarea.value;
    return valor;
}

function limpiarCampo(){
    if(document.getElementById('textArea').value == "Ingresa aquí tu texto")
        document.getElementById('textArea').value = "";  
}

function soloLetrasMinusculas(texto){
    return /^[a-z" "]*$/.test(texto);
}
function mostrartexto(texto){
    document.getElementById('muñeco-con-lupa').style.display = "none";
    document.getElementById('mensaje-final').style.display = "none";
    document.getElementById('header-mensaje-falta-encriptar').textContent = texto;
}

function mensajeDeAlerta(texto){
    if (texto == 'Ingresa aquí tu texto')
        alert("Aún no has elegido tu texto. Recuerda que solo se aceptan letras minusculas");
    else
        alert("Solo se aceptan letras minusculas");
}