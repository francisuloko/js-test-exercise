class Calculator {
    add(a, b){
        if(typeof(a) == 'number' &&
        typeof(b) === 'number') {  
          return a + b
      } else {
          return "Enter valid input";
      }
    }

    subtract(a, b){
        if(typeof(a) == 'number' &&
        typeof(b) === 'number') {
            return a - b
        } else {
            return "Enter valid input";
        }
    }

    divide(a, b){
        if(typeof(a) == 'number' &&
        typeof(b) === 'number') {
            if(a&&b){
              return a / b
            } else {
              return a ? 'infinity' : 0;
            }
        } else {
            return "Enter valid input";
        }
    }

    mulitiply(a, b){
        if(typeof(a) == 'number' &&
        typeof(b) === 'number') {
            if(a&&b){
              return a * b
            } else {
               return 0
            }
        } else {
            return "Enter valid input";
        }
    }
}

const calc = new Calculator();
console.log(calc.mulitiply(10, 4));
module.exports = Calculator
