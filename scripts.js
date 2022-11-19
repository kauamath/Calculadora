function newNumber(num) {
    const valueDisplay = document.querySelector(".display").value
     
    document.querySelector(".display").value = valueDisplay + num
}

function limpaTela(){
    document.querySelector(".display").value = ""
}

function calcular(){
    const valueDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valueDisplay) 
}

function inverterNumero (){
  const valueDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = valueDisplay * -1
}