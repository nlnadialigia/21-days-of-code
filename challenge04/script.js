function insert(num){
    const numero = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = '';
    }
    document.getElementById('result').innerHTML = numero + num
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    const result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calcular(){
    const result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }  
    else {
        document.getElementById('result').innerHTML = alert('Opção inválida, inicie a conta novamente...')
    }
}