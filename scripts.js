/*BUGS: DECIMALS FAIL, SIGN DOESN'T WORK, SIGNS DON'T CHANGE */
let displayText = '0';
let tempValue = [];
function add(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

function subtract(valueOne, valueTwo) {
    return valueOne - valueTwo;
}

function multiply(valueOne, valueTwo) {
    return valueOne * valueTwo;
}

function divide(valueOne, valueTwo) {
    return valueOne / valueTwo;
}

function operate(operator, valueOne, valueTwo) {
    if (operator = '+') {
        add(valueOne, valueTwo);
    }
    else if (operator = '-') {
        subtract(valueOne, valueTwo);
    }
    else if (operator = '*') {
        multiply(valueOne, valueTwo);
    }
    else {
        divide(valueOne, valueTwo);
    }
}

function changeToInt () {
    for (let i = 0; i < tempValue.length; i++) {
        if (!isNaN(tempValue[i]))     
             tempValue[i] = parseInt(tempValue[i],10);
             console.log("WORK" + typeof (tempValue[i]));
     }
 
} 

function deleteValue () {
    let lastChar = displayText;
    lastChar = lastChar.charAt(lastChar.length - 1);
    if (lastChar == ' ') {
        
        displayText = displayText.slice(0, -3);
    }
    else {
    displayText = displayText.slice(0, -1);
    }
}
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(button.id);
      let lastChar;
      
      switch(button.id) {
          case '0': 
          if (displayText == '0') {
            deleteValue();
        }
            displayText = displayText + '0';
          break;
          
          case '1': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '1';
        break;
                  
          case '2': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '2';
        break;
                  
          case '3': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '3';
        break;
                  
          case '4': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '4';
        break;
                          
          case '5': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '5';
        break;
                          
          case '6': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '6';
        break;
                          
          case '7': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '7';
        break;
                          
          case '8': 
          if (displayText == '0') {
            deleteValue();
        }
          displayText = displayText + '8';
        break;
           
        case '9': 
        if (displayText == '0') {
            deleteValue();
        }
        displayText = displayText + '9';

      break;
                   
      case 'divide': 
      /* FIX COPYING OF CODE and make it transform isntead of stop*/
      lastChar = displayText.replace(/\s/g,'');
      lastChar = lastChar.charAt(lastChar.length - 1);
      if (lastChar != '÷' && lastChar != '×' && lastChar != '-' && lastChar != '+'){
        displayText = displayText + ' ÷ ';
      }

      
    break;

        case 'multiply': 
        lastChar = displayText.replace(/\s/g,'');
        lastChar = lastChar.charAt(lastChar.length - 1);
        if (lastChar != '÷' && lastChar != '×' && lastChar != '-' && lastChar != '+'){
          displayText = displayText + ' × ';
        }
  
    break;

        case 'subtract': 
        lastChar = displayText.replace(/\s/g,'');
        lastChar = lastChar.charAt(lastChar.length - 1);
        if (lastChar != '÷' && lastChar != '×' && lastChar != '-' && lastChar != '+'){
          displayText = displayText + ' - ';
        }
    break;

        case 'add': 
        lastChar = displayText.replace(/\s/g,'');
        lastChar = lastChar.charAt(lastChar.length - 1);
        if (lastChar != '÷' && lastChar != '×' && lastChar != '-' && lastChar != '+'){
          displayText = displayText + ' + ';
        }
    break;

    case 'equal': 
    calculate();
break;

    case 'backspace': 
    deleteValue();
    break;

    case 'reset':
    displayText = '0';
      }

        


    
    
      console.log(displayText + "STOP");
      displayCalculation();
    });
  });

  function displayCalculation() {
      let display = document.querySelector('#display');
      display.textContent = displayText;
  }

  function calculate() {
      console.log("asdas" + displayText + "stop");
      if (displayText == '') {
          displayText = '0';
      }
    let readText = '';
    tempValue = displayText.split(" ");
    changeToInt();
    console.log("READ: " + tempValue);
    bedmass(tempValue); 
  }

function divideMultiply(text) {
    let value = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] == '×') {
            console.log(i);
            value = multiply(text[i-1], text[i+1]);
            tempValue.splice(i-1, 3, value);
            console.log("TEMPs " + tempValue);
            divideMultiply(text);
        }
        else if (text[i] == '÷') {
            value = divide(text[i-1], text[i+1]);
            tempValue.splice(i-1, 3, value);
            console.log("TEMPs " + tempValue);
            divideMultiply(text);
        }

      }
}

function addSubtract(text) {
      for (let i = 0; i < text.length; i++) {
        if (text[i] == '+') {
            value = add(text[i-1], text[i+1]);
            tempValue.splice(i-1, 3, value);
            console.log("TEMP " + tempValue);
            addSubtract(text);
        }
        else if (text[i] == '-') {
            value = subtract(text[i-1], text[i+1]);
            tempValue.splice(i-1, 3, value);
            console.log("TEMP " + tempValue);
            addSubtract(text);
        }

    }
}
  function bedmass(text) {
      divideMultiply(text);
      addSubtract(text);
      displayText = tempValue[0].toString();
      }



  displayCalculation();