const {readFile,writeFile} = require('fs')


// readFile('./content/first.txt','utf-8',(err,result)=>{

// })

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err) return;
    const first = result;
    
    writeFile(`./content/result-async.txt`,`hello this is the Async method`,(err,result2)=>{
        if(err) return;
        console.log(result2);
    });
});