
let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let logbtn = document.querySelector("#logbtn")
let errMess = document.querySelector("#errMess")
let succMess = document.querySelector("#succMess")


let logform = document.querySelector("#logform")
let testSection = document.querySelector("#test")


let QuestionsNum = document.querySelector("#questionsNum")
let strTestBtn = document.querySelector("#strTestBtn")
let testScreen = document.querySelector("#testScreen")
let submitBtn = document.querySelector("#submitAnswers")
let scoreDiv = document.querySelector("#score")


let logoutBtn = document.querySelector("#logoutBtn")


let correctAnswers = []
let cartona = ""




if (localStorage.getItem("Islogin") === "true") {

    showTestPage()

}




logbtn.addEventListener("click", function(e){

    e.preventDefault()

    if(userEmail.value === "aa@" && userPass.value === "1234"){

        errMess.classList.add("d-none")
        succMess.classList.remove("d-none")

        localStorage.setItem("Islogin","true")

        setTimeout(showTestPage,1000)

    }

    else{

        errMess.classList.remove("d-none")

    }

})




function showTestPage(){

    logform.classList.add("d-none")
    testSection.classList.remove("d-none")

}




logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("Islogin")

    location.reload()

})




strTestBtn.addEventListener("click", function(){

    cartona = ""
    correctAnswers = []

    let num = QuestionsNum.value

    for(let i=1;i<=num;i++){

        let num1 = Math.floor(Math.random()*10)
        let num2 = Math.floor(Math.random()*10)

        let result = num1 + num2

        correctAnswers.push(result)

        cartona += `
        
        <div class="my-2">

            ${i}) ${num1} + ${num2}

            <input type="number" class="form-control userAnswer">

        </div>
        
        `
    }

    testScreen.innerHTML = cartona

    submitBtn.classList.remove("d-none")

    scoreDiv.innerHTML = ""

})




submitBtn.addEventListener("click", function(){

    let inputs = document.querySelectorAll(".userAnswer")

    let score = 0

    inputs.forEach(function(input,index){

        if(Number(input.value) === correctAnswers[index]){

            score++

        }

    })

    scoreDiv.innerHTML =

    `Your Score: ${score} / ${correctAnswers.length}`

})