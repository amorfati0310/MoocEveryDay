
 
### 모카
모카(mocha)는 테스트 코드를 돌려주는 테스트 러너

https://mochajs.org/

테스트 수트: 테스트 환경으로 모카에서는 describe()으로 구현한다

테스트 케이스: 실제 테스트를 말하며 모카에서는 it()으로 구현한다


### should

노드에서는 assert말고 should를 권장 

https://github.com/tj/should.js/

### 슈퍼테스트 
슈퍼테스트 코드 저장소 링크: https://github.com/visionmedia/supertest

단위 테스트: 함수의 기능 테스트

통합 테스트: API의 기능 테스트

슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리다

내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸뒤 결과를 검증한다 