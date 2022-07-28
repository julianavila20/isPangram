// create funtion using index of or includes (a,b,c,d)
// this function will take the string and .toLowerCase it. 

function isPangram(string) {
    let input = string.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (input.indexOf(char) === -1) {
            return "is not a pangram";
        }

    }
    return "is a pangram"
}
