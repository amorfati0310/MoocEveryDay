const http = require('http');

const hostname ='127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
  }
  else if(req.url ==='/users'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list\n');
  }
  else {
    res.statusCode === 404;
    res.end('Not found');
  }
 
})

server.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`);
})
// curl -X GET 'localhost:3000'
// curl -X GET 'localhost:3000' -v 를 날리면 TCP 및 Header 정보들을 이런 것들을 할 수 있다. 

// TCP_NODELAY set
// * Connected to localhost (127.0.0.1) port 3000 (#0)
// > GET / HTTP/1.1
// > Host: localhost:3000
// > User-Agent: curl/7.54.0
// > Accept: */*
// >
// < HTTP/1.1 200 OK
// < Content-Type: text/plain
// < Date: Wed, 08 Aug 2018 03:17:22 GMT
// < Connection: keep-alive
// < Content-Length: 12

//server.listen 서버를 요청 대기 상태로 만들어 주는 함수 
// port, hostname