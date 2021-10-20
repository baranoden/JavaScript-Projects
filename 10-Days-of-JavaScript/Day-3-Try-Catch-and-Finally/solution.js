function reverseString(s) {

    let array = []
    if (typeof s == typeof 1) {

        console.log("s.split is not a function")
        console.log(s)
    }
    else {
        for (var i = 0; i < s.length; i++) {

            array.push(s[i])


        }

        let reversed = array.reverse()
        let joined = reversed.join("")

        console.log(joined)
    }


}




console.log(reverseString(12))
