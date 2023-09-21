const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")


btnOne.addEventListener("click", function(){
    let input = document.getElementById("inOne").value;
    let cels = (input - 32.0) * 5.0/9.0
    let output = document.getElementById("outOne")
    output.innerHTML = cels
})

btnTwo.addEventListener("click", function(){
    let input = document.getElementById("inTwo").value;
    let fahr = (input * 9.0/5.0) + 32.0
    let output = document.getElementById("outTwo")
    output.innerHTML = fahr
})