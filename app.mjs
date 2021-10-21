import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if(!err){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
            res.end();
        }else{
            console.log(err);
        }
    })
})

const port = process.env.PORT;
server.listen(port, ()=>{
    console.log(port);
})