/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel
    vowel = "aeiou"
    let consonants = ""
    
    for (var i=0;i<s.length;i++){
        if(vowel.includes(s[i]))
        console.log(s[i])
        else 
        consonants+=s[i]+"\n"
    }
    console.log(consonants)

}