
function ceasarCiper(word,cipher){
    let answer = "";
    let word1 = word

    let trackCasing = []
    for (let i = 0; i < word1.length; i++){
        if (word1[i].match(/^[A-Z]*$/)){
            trackCasing.push(i)
        }
    }

    console.log(trackCasing)
    word = word.toLowerCase()

    //let alphabet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    console.log(alphabet[23], "testing here")
    console.log(alphabet[0])
    
    let newWord = ""

    for (let j = 0; j < word.length; j++){
        if (!word[j].match(/[a-zA-Z]/i)){
            newWord += word[j]
        }
        for (let i = 0; i < alphabet.length; i++){
            if (alphabet[i] === word[j] && (i+cipher) > 25){
                let remainder = (i+cipher) - 25 
                newWord += alphabet[remainder-1]
            } else{
            if(alphabet[i] === word[j]){
                console.log(cipher)
                console.log(alphabet[i + cipher], i, i+cipher)
                newWord += alphabet[i+cipher]     }
                }
            };
        };

        console.log(trackCasing)

        newWord = newWord.split("")
        
        

        //console.log(answer)
        return newWord
    };


//console.log(ceasarCiper("hello", 2))
console.log(ceasarCiper("x?Y!Z", 3))

//failed test cases

 /* for (let i = 0; i < newWord.length; i++){
            for (let j = 0; j < trackCasing.length; j++){
                if (i === trackCasing[j]){
                    answer += newWord[i].toUpperCase()
                } 
                else(
                    answer += newWord[i]
                )
            }
        }
        answer = [...new Set(answer)].join("")*/


    /*let counter = trackCasing.length
        //string.replace(searchValue, replaceValue);
        while(counter){
        for (let i = 0; i < trackCasing.length; i++){
          console.log(trackCasing[i])
            
        
        let a = newWord.replace(newWord.charAt(trackCasing[i]), newWord.charAt(trackCasing[i]).toUpperCase())
    counter--    
    console.log(a)
        }
        
    }*/