alert ("Bienvenidos a DINERO FACIL. ¡Cotiza tu préstamo YA!");

let monto = 0;

while(monto == 0){

    monto = Number(prompt("¿Cuánto necesitas? de $10000 a $100000"));
    
    if (montoCorrecto(monto)){
    
        let cuotas = 0;
        
        while(cuotas== 0){

            cuotas = Number(prompt("¿A qué plazo quieres pagarlo? : 6 - 12 - 18"));

            if(cuotas != 6 && cuotas != 12 && cuotas != 18){
                alert("Por favor, ingrese una cantidad admitida")  
                cuotas = 0;
            } else {
                calcularCuotas(monto, cuotas);
            }
        }
    
        
    } else {
        alert("El monto debe estar entre $10000 y $100000");    
        monto = 0;        
    }

}

function montoCorrecto(monto){

    if(monto >= 10000 && monto <= 100000){
        return true;
    }else{
        return false;
    }    

}

function calcularCuotas(monto, cuotas){

    let valorMensual = monto / cuotas;
    let porcentaje = (valorMensual * 100) / 5;
    let valorTotal = valorMensual + porcentaje;

    
	resultado = valorTotal / cuotas;

	switch(cuotas){
        case 6:
            alert (`Pagaras 6 cuotas de ${resultado.toFixed(2)}`);
		break;

        case 12:
        
            alert (`Pagaras 12 cuotas de ${resultado.toFixed(2)}`);
        break;
                    

        case 18:
            alert (`Pagaras 18 cuotas de ${resultado.toFixed(2)}`);
        break;


        default:
            alert (`Ingresar un número válido de cuotas : 6 - 12 - 18`);
    }  

}