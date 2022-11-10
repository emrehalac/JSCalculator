
const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
// to increase the legibility , I collected all of the eventlistener based functions  to one function called callEventListeners. 
const callEventListeners = ()=>{
  numbers.forEach((numberBtn)=>{
    numberBtn.addEventListener("click",()=>{
      helpers.printNumberToScreen(numberBtn.getAttribute("data-value"));
    } )
  })

  operators.forEach((operatorBtn)=>{
    const value = operatorBtn.getAttribute("data-value")
    operatorBtn.addEventListener("click",()=>{
      if (value == "=") {
        helpers.printResultToScreen();
        return;
      }
      if (value == "clear") {
        screen.value = null;
        return;
      }
      helpers.printNumberToScreen(value);
    } )
  })
}
  // 'helpers' component help us to find out our similar functions  easier.  Basically 'a function array'. 
const helpers = {
  printNumberToScreen : (value) => {
    screen.value += value;
  },
  printResultToScreen : () => {
    screen.value = eval(screen.value);
  } 
}

callEventListeners(); 


