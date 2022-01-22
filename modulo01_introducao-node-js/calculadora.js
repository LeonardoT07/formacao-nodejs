function soma(a, b){
    return "A soma dos números " + a + " + " + b + " é igual a: " + (a + b);
}

function sub(a, b){
    return "A subtração dos números " + a + " - " + b + " é igual a: " + (a - b);
}

function mult(a, b){
    return "A multiplicação dos números " + a + " x " + b + " é igual a: " + (a * b);
}

function div(a, b){
    return "A divisão dos números " + a + " / " + b + " é igual a: " + (a / b);
}

module.exports = {
    soma, 
    sub,
    mult,
    div
};