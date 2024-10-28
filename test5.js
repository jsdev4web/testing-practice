
function analyzeArray(arr){

    let mean = (arr) => {
        //let sum = arr.reduce((a,b) => a + b, 0);
        let num = arr.length
        let sum = 0
        for(let i = 0; i < num; i++){
            sum = sum + arr[i]
        }
        return sum / arr.length;
    }

    let ans = {

        average: mean(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

    return ans
}


let object = analyzeArray([1,8,3,4,2,6])
module.exports = object
console.log(object)


