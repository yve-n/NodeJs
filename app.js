//  const FileSystem = require('./filesystem'); 
//  const fileSystem = new FileSystem ;
// fileSystem.on('fileCreated',()=>{
//     console.log('TP Completed');
// })
// fileSystem.fileCreated();


const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    // console.log(request.url);
    // console.log(request.method);
    response.statusCode = 200;
    let view = './views/';
    switch(request.url){
        case "/":
            view += 'index.html';
            break;
        case "/contact-us":
            if(request.method.toLowerCase() === 'post'){
                let data ='';
                request.on('data', (chunk)=>{data += chunk.toString()});
                request.on('end', ()=>{
                    console.log(new URLSearchParams(data));
                })
                response.statusCode =302;
                response.setHeader('Location','/contact-us');
            }
            view += 'contact.html';
            break;
        
        default:
            response.statusCode =404;
            view += '404.html';
            break;    
    }
    
    response.setHeader('Content-Type','text/html');
    fs.readFile(view, {encoding : 'utf-8'}, (error, content)=>{
        if(error) console.error(error);
        if(content) response.write(content);
        response.end();

    })
})
// server.on('connection', ()=> {console.log('request something')})
server.listen(4000);
