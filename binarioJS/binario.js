$(function() {
    $('#btn_convertir').click(function(){
        convertidor_binario_decimal($('#txt_binario').val());  
    }) 
});

function convertidor_binario_decimal(binario){
    var resultado="";
    if(validador(binario)){
        var vec_final = new Array(0,0,0,0,0,0,0,0);
        var vec_b = binario.split("");
        
        var x = 8-vec_b.length;

        for (let i = 0; i < vec_b.length; i++) {
            vec_final[x] = vec_b[i];
            x=x+1;
        }
        console.log(vec_final);
        var signo;
        if(vec_final[0]==0){
            signo ="+";
        }else{
            signo ="-";
        }

        console.log("Signo = " , signo);

        var exp_b = vec_final[1]+""+vec_final[2]+""+vec_final[3];
        var exp_d = parseInt(exp_b, 2);

        console.log("Exp en binario = " , exp_b);
        console.log("Exp en decimal = " , exp_d);

        var frac_b = vec_final[4]+""+vec_final[5]+""+vec_final[6]+""+vec_final[7];
        
        var frac_aumentada = new Array (1,".",vec_final[4],vec_final[5],vec_final[6],vec_final[7]);
        var exponente = exp_d - (Math.floor(7/2));
        

        console.log("exponente :", exponente);
        console.log("Fraccion en binario = " , frac_b);
        console.log("fraccion aumentada :", frac_aumentada);

        resultado = "";
        $('#txt_resultado').val(resultado + vec_final);
    }else{
        $('#txt_resultado').val("#########Error##########");
    }
    
    $("#signo").text(signo);
    $("#exp_binario").text(exp_b);
    $("#exp_decimal").text(exp_d);
    $("#exponente").text(exponente);
    $("#fraccion_binario").text(frac_b);
    $("#fraccion_aumentada").text(frac_aumentada);

}

function validador(exp){
    if (exp.length>8){
        alert("Error lo ingresado debe ser un numero no mayor a 8 bits");
        return false
    }
    return true
}