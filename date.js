

function toDateString(string) {
   const time = new Date(string)
    return time.getTime()
}

console.log(toDateString("2022-02-02"))

module.exports = { toDateString }