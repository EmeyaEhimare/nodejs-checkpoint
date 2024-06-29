const fs = require('fs')

fs.writeFile('input.txt','Hello Node', (err) => {
    if(err){
        return console.error(err)
    }


console.log("read data")

fs.readFile('input.txt', (err, data) => {
    if(err){
        return console.error(err)
    }

    console.log(data.toString())
})

})