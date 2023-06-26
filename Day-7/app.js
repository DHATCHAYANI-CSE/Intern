/*const http=require('http');
const fs = require('fs');
const hostname='localhost';//127.0.0.1
const port=3001;
const requestListener=function(request,response){
    response.setHeader("Content-Type","text/html");
    response.writeHead(200);
    response.end(`
    <h1>Message from Universe!!</h1>
    <h2>Universe Is saying that Dhatchu is choo sweet!!!`);
}
const server=http.createServer(requestListener)
server.listen(port,hostname,()=>{
    console.log("Server is running");
})
 */
const http = require('http');
const fs = require('fs');
const hostname = 'localhost'; //127.0.0.1
const port = 3001;

function read(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, ((error, data) => {
            if(error) {
                reject("Failed");
            }else {
                resolve(data);
            }
        }))
    })
}

const requestListener = async (request, response) => {
    try {
        let data;
        console.log(request.url);
        switch(request.url) {
            case '/states': {
               data = await read(`${__dirname}/states.txt`);
               break;
            }
            case '/capital': {
                data = await read(`${__dirname}/capital.txt`);
                break;
            }
            default: {
                data = "Not found";
                break;
            }
        }
        response.setHeader("Content-Type", "application/json");
        response.writeHead(200);
        response.end(`
        {
            "data": ${data.toString()},
        }
    `);
    } catch (error) {
        response.setHeader("Content-Type", "application/json");
        response.writeHead(500);
        response.end(`
        {
           "error": ${error}
        }
    `);
    }
    
}

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log("Sever is running")
})
    
    