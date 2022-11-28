alert ("Bienvenidos a DINERO FACIL. ¡Cotiza tu préstamo YA!");
let monto = Number(prompt("¿Cuánto necesitas? de $10.000 a $100.000"));
let cuotas = Number(prompt("¿A qué plazo quieres pagarlo? : 6 - 12 - 18"));




    function calcularCuotas(monto, cuotas){
        if(monto >= 10000 && monto <= 100000) {

            switch(cuotas){
                case 6:
                    resultado = monto / 6 
                    alert (`Pagaras 6 cuotas de ${resultado.toFixed(2)}`);
                    break;

                case 12:
                resultado = monto / 12 
                    alert (`Pagaras 12 cuotas de ${resultado.toFixed(2)}`);
                    break;
                    

                case 18:
                    resultado =monto / 18 
                    alert (`Pagaras 18 cuotas de ${resultado.toFixed(2)}`);
                    break;
                    

                default:
                    alert (`No seleccionaste cuotas`);
            }        
        } 
    }

    
    calcularCuotas(monto, cuotas);