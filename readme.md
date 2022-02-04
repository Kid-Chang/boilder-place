#Node + React 기본 학습
readme는 한글로,,, 주석은 영어로,,,

## 0201 학습상황.

브라우저가 값을 받아오는건 REST API의 get에 해당한다.

## 0202 학습상황.

.get .post등 REST API 부분을 각각 Route라고 부른다.

## 0203 학습상황.

jwt 토큰을 이용한 로그인 로직.

1. client의 쿠키에 보관된 토큰을 서버가 받으면 decode key를 복호화한다.
2. userId값을 받고, 이 id값에 동일한 토큰이 저장되어있는지 확인한다.
3. 쿠키가 일치하면 Auth True. 틀리면 Auth False.

이후 익스프레스의 Router를 사용하면 method으로 분류하기에,
/api/user/login
/api/product/create 등 세분화해서 작성해야한다.

미들웨어란? 리퀘스트를 받고 콜백함수를 실행하기전에 특정한 액션을 하는 것.
