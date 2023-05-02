const fs = require('fs')

fs.readFile('./好.md',(err,data)=>{
    if(err)throw err;
    console.log(data.toString()) // 解码
})