const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipPerPerson = document.querySelector('#tip-amount')
const totalPerPerson = document.querySelector('#total-amount')
const tips = document.querySelectorAll('.tips')
let tipCustom = document.querySelector('.tip-custom')
let reset = document.querySelector('.reset-btn')
let errorMsg = document.querySelector('.error');

billInput.addEventListener("input", billInputFun)
peopleInput.addEventListener("input", peopleInputFun)
tipCustom.addEventListener('input', tipCustomFun)
tips.forEach((val)=> {
    
    val.addEventListener('click',handleClick)
    
})

reset.addEventListener('click', ()=>{
    billInput.value = 0;
    billInputFun();
    peopleInput.value = 1;
    peopleInputFun();
    tipCustom.value =``
})


billInput.value = 0;
peopleInput.value = 1;
tipPerPerson.innerHTML = "₹" + (0).toFixed(2)
totalPerPerson.innerHTML = "₹" + (0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0

function billInputFun () {
    billValue = parseFloat(billInput.value)
    if(isNaN(billValue)) billValue = 0
    calculateTip();
}

function peopleInputFun () {
    peopleValue = parseFloat(peopleInput.value)
    if(isNaN(peopleValue) || peopleValue<=0 ) {
        errorMsg.style.display = 'block'
    } else {

        errorMsg.style.display = 'none'
    }

        calculateTip();
    
}

function tipCustomFun (){
    
    tipValue = parseFloat(tipCustom.value)/100
    tips.forEach((val) => {
      val.classList.remove("active-tip");
    });
    calculateTip();
}

function handleClick (event) {
    tips.forEach((val)=> {
        val.classList.toggle("active-tip");
        val.classList.remove('active-tip');
        if(event.target.innerHTML == val.innerHTML) {
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML)/100
            // console.log(tipValue)
        }
        
        
    }) 
    calculateTip();
}

function calculateTip() {
    if(peopleValue >=1){
        if(isNaN(tipValue)) tipValue=0;
        let tipAmount = (billValue * tipValue)/peopleValue
        let total = (billValue +  (tipAmount*peopleValue)) / peopleValue;
        console.log(tipAmount)
        console.log(total)
        tipPerPerson.innerHTML = "₹" + tipAmount.toFixed(2)
        totalPerPerson.innerHTML = "₹" + total.toFixed(2)
    }
}