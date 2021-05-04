function calcular(){
    
    var valor1 = parseFloat( document.querySelector("#txtV1").value );
    var valor2 = parseFloat( document.querySelector("#txtV2").value );
    var op = parseInt( document.querySelector("#txtOp").value );
    var calculo = 0;

    switch (op) {
        case 1:
            calculo = valor1 + valor2;
            break;
        case 2:
            calculo = valor1 - valor2;
            break;
        case 3:
            calculo = valor1 * valor2;
            break;
        case 4:
            calculo = valor1 / valor2;
            break;
        case 5:
            calculo = Math.sqrt(valor1 * valor2);
            break;
        default:
            calculo = 0;
    }

    document.querySelector("#display").textContent = calculo;
    preventDefault();
}