// *실제 서버 연결해보기 (192.168.0.67)

// fetch: 서버와 데이터를 주고 받기 위한 API 호출 함수
// fetch함수의 인자:
// 첫번째인자: 서버의 주소(URL)
// 두번째인자: 전송할 데이터와 HTTP메소드 등을 포함하는 객체

// GET - 1번 게시물 조회
http: fetch("http://localhost:8080/board/read?no=1")  //서버로 GET요청
  .then((Response) => Response.json())  //응답 데이터를 json으로 변환
  .then((json) => console.log(json));  //json 데이터 출력

// POST - 새로운 게시물 생성
fetch("http://localhost:8080/board/reguster", {
  method: "POST",  //POST요청
  body: JSON.stringify({
    title: "가입인사",
    content: "안녕하세요~",
    wruter: "user",
  }),  //전송할 데이터
  headers: {
    "content-type": "application/json; charset=UTF-8",  //헤더 설정
  },
})
  .then((Response) => Response.text())  //응답이 단순한 텍스트일때
  .then((json) => console.log(json));

// PUT - 1번 게시물 수정
fetch("http://localhost:8080/board/modify", {
  method: "PUT",
  body: JSON.stringify({
    no: 4,
    title: "가입인사",
    content: "반갑습니다~",  //내용변경
    writer: "user",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then((Response) => console.log(Response.status));  //상태코드 확인

// DELETE - 1번 게시물 삭제
// fetch("http://localhost:8080/board/remove?no=4", {
// method: "DELETE",
// })
// .then((response) => console.log(response.status));

// fetch함수는 자체적으로 promise객체를 생성하여 반환한다
// 그래서 fetch함수 뒤에 then 또는 catch함수를 이어서 사용할 수 있다