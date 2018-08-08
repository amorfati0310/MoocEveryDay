const express = require('express');


function logger(req, res, next){
  console.log('i am logger')
  next();
  // next를 호출해야만 다음 로직 수행 가능  
}

// next를 호출하지 않으면 다음 동작이 실행 안 됨 ! 

function logger2(req, res, next){
  console.log('I am logger 2');
  next();
}

const app = express();
app.use(logger);
app.use(logger2)

app.listen(3000, function(){
  console.log('Server is running');
})

// 어플리케이션 

//  서버에 필요한 기능인 미들웨어를 추구한다. 
//  라우팅 설정을 할 수 있다. 
// 서버를 요청 대기 상태로 만들어 준다. 

// 미들웨어는 함수의 연속이다. 

//  로깅 미들웨어를 만들어 보자 
//  써드파티 미들웨어를 사용해보자 
//  일반 미들웨어 에러 미들웨어 
// 404, 500 에러 미들웨어를 만들어보자 
