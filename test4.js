//import { replace, html } from "preserve-case-replace";

function ceasarCipher(word,cipher){
    
    let word2 = word
    word = word.toLowerCase()

    let alphabetU =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    //console.log(alphabet[23], "testing here")
    //console.log(alphabet[0])
    
    let newWord = ""

    //pushes all my special characters through
    for (let j = 0; j < word.length; j++){
        if (!word[j].match(/[a-zA-Z]/i)){
            newWord += word[j]
        }
        //takes care of wrapping the loop back to a-z
        
        for (let i = 0; i < alphabet.length; i++){

            if (alphabet[i] === word[j] && (i+cipher) > 25){
                let remainder = (i+cipher) - 25 
                newWord += alphabet[remainder-1]
            } else{//SAVEPOINT!!!
            if(alphabet[i] === word[j]){
                console.log(cipher)
                console.log(alphabet[i + cipher], i, i+cipher)
                newWord += alphabet[i+cipher]     
                    }
                }
            };
        };

        console.log(word2)

        let trackCasing = []
        for (let i = 0; i < word2.length; i++){
            if(word2[i].match(/^[A-Z]*$/)){
                trackCasing.push(i)
            }
        }
        console.log(trackCasing)

        let upWord = ""
        trackCasing.forEach(function(item){
            console.log(newWord[item].toUpperCase())
             upWord = newWord[item].toUpperCase()
                
                newWord = newWord.slice(0, item) + newWord.slice(item + 1)
                //newWord = newWord.slice(0, item) + newWord[item].toUpperCase() + newWord.slice(item)
                
                //console.log(upWord)
                newWord = newWord.slice(0, item) + upWord + newWord.slice(item)
                upWord = ""
        })

    
        
        return newWord
    };

    module.exports = ceasarCipher;

//console.log(ceasarCiper("hello", 2))
console.log(ceasarCipher("X?y!Z", 3))


/*
        //newWord = newWord.split("")


1. Another way of creating a ceasar cipher is to use char codes together 
with charCodeAt. If the char code is less than 91, it's a capital letter. 
Take it from there by start from over in the alphabet using modulus operator (%). 
You should be able to solve this need one for loop. – 

2.There's no need to use a loop to search for a 
character in a string. Use alphabet.indexOf(word[j])

let answer = "";


let word1 = word

let trackCasing = []
    for (let i = 0; i < word1.length; i++){
        if (word1[i].match(/^[A-Z]*$/)){
            trackCasing.push(i)
        }
    }

    console.log(trackCasing)
*/

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