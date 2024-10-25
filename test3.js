
let myOject = {

    add: function(x, y) {
        return x + y;
      },

    subtract: function(x, y) {
        return x - y;
      },

    divide: function(x, y) {
        return x / y;
      },

    multiply: function(x, y) {
        return x * y;
      }

}

module.exports = myOject;


let x = myOject.add(7, 1)
console.log(x)

let y = myOject.subtract(7, 1)
console.log(y)

let z = myOject.divide(9, 3)
console.log(z)

let v = myOject.multiply(7, 2)
console.log(v)

