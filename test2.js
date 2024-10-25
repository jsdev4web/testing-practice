function reverse(reverseString){
    let list = []
    for(let i = 0; i < reverseString.length; i++){
        //console.log(reverseString[i])
        list.push(reverseString[i])
    }
    
    let newlist = list.reverse().join("")

    return newlist
}
module.exports = reverse;


//let word = "apples"
console.log(reverse("apples"))