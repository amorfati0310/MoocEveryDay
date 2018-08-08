Hello Node.js까지 강의 들으면서 배운 점 

### 이벤트 기반의 비동기 I/O 프레임워크 

클라-이벤트큐- non-blocking 
non-blocking-worker(오래 걸릴 것 같은 애들 얘한테 위임 , C++ threadpool)
웹워커? 디스크에 파일을 읽는다는지 등등 

[자세한_설명](http://blog.jeonghwan.net/node/2017/01/27/node-io-deep.html)

기본 모듈 http라는 모듈을 쓸 수 있다. 
인자들은 다 변수화 시켜서 hostname, port 

```js
const http = require('http');

const hostname ='127.0.0.1';
const port = 3000;
```

> http.createServer로 callback함수가 처리된다. 
```js
const server = http.createServer((req,res)=>{

})

//만든 서버를 리슨하고 있겠다.

server.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`);
})
```

> Etc 
`curl -X GET 'localhost:3000'`
`curl -X GET 'localhost:3000' -v`
 를 날리면 TCP 및 Header 정보들을 이런 것들을 할 수 있다. 


 ```
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
 ```

