

function stringValidation(string, minLength, maxLength) {
    
    const str = string.length

    if (maxLength < str ||typeof string !== 'string') {
        console.log("ERRRORRRRR")
    } else {
        if (minLength > str && maxLength < string)  {
            return false
        } else if (minLength == 0 || maxLength == 0) {
            return true
        } else  {
            return true
        }
    }
}



console.log(stringValidation("kalle45676567",0,5))