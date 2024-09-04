// 추가버튼
const addButton = document.getElementById('addButton');
// 추가할 리스트 정보
const listInput = document.getElementById('listInput');
// 리스트 상세 정보
const list = document.getElementById('list');
// 전체삭제 버튼
const allDelete = document.getElementById('allDelete');

// 통계 정보
const totalCountText = document.getElementById('total');
let totalCount = 0;
let completedCount = 0;

// 리스트 생성 버튼 이벤트 리스너
addButton.addEventListener('click', function() {
  const newText = listInput.value;

  if(newText !== '') {
    const newItem = document.createElement('div');

    // 체크박스
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // 텍스트 스팬
    const textSpan = document.createElement('span');
    textSpan.textContent = newText;
    
    // 수정버튼
    const editButton = document.createElement('button');
    editButton.type = 'button';

    // 버튼에 텍스트 추가
    editButton.textContent = '수정';

    // 수정 버튼 이벤트 리스너
    editButton.addEventListener('click', function() {

      // 텍스트를 수정하기 위한 input 요소
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = textSpan.textContent;
      
      // 수정 완료 버튼 생성
      const saveButton = document.createElement('button');
      saveButton.textContent = '저장';
   
      // 수정중 수정 버튼 숨기기
      editButton.style.display = 'none';
      
      // 수정 텍스트 업데이트, input 필드 제거
      saveButton.addEventListener('click', function() {
        if (inputField.value.trim() !== '') {

          // 입력된 텍스트로 업데이트
          textSpan.textContent = inputField.value;

          // input필드와 저장 버튼 제거
          newItem.removeChild(inputField);
          newItem.removeChild(saveButton);

          // 수정버튼 다시 보이기
          editButton.style.display = 'inline';

          // 텍스트 스팬 다시 표시
          textSpan.style.display = 'inline';
        } else {
          alert('할일을 적어주세요!');
        }
      });
      
      // 기존 텍스트 숨기고 input필드와 저장버튼추가
      textSpan.style.display = 'none';
      newItem.insertBefore(inputField, textSpan.nextSibling);
      newItem.insertBefore(saveButton, inputField.nextSibling);
    });
      
    // 삭제버튼
    const dleButton = document.createElement('button');
    dleButton.type = 'button';

    // 버튼에 텍스트 추가
    dleButton.textContent = '삭제';

    // 삭제 버튼 이벤트 리스너
    dleButton.addEventListener('click', function() {
      // 체크된 상태에서 삭제될 경우 완료 개수 감소
      if (checkbox.checked) {
        completedCount--;
      }

      // 삭제시 총 개수 감소
      totalCount--;
      list.removeChild(newItem);
      updateCount();
    });

    // 체크박스 클릭시 완료 개수 업뎃
    checkbox.addEventListener('change', function() {
      if(checkbox.checked) {
        completedCount++;
      } else {
        completedCount--;
      }
      updateCount();
    });

    // 리스트 항목 구성
    newItem.appendChild(checkbox);
    newItem.appendChild(textSpan);
    newItem.appendChild(editButton);
    newItem.appendChild(dleButton);

    //
    list.appendChild(newItem);

    // 총 개수 증가
    totalCount++;
    updateCount();

    // 입력 필드 초기화
    listInput.value = '';

  } else {
    alert('할일을 적어주세요!');
  }
});

// 전체 삭제 버튼
allDelete.type = 'button';

// 버튼에 텍스트 추가
allDelete.textContent = '전체 삭제';

// 삭제 버튼 이벤트 리스너
allDelete.addEventListener('click', function() {  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // 통계 정보 초기화
  totalCount = 0;
  completedCount = 0;
  updateCount();
});

// 리스트 통계 정보 업데이트 함수
function updateCount() {
  totalCountText.textContent = `총 ${totalCount}개 완료 ${completedCount}개`
};

// 초기 통계 정보를 표시하는 코드
updateCount();

// 초성 중성 종성까지 모두 분리해서 타이핑하는 효과
// https://westzero.tistory.com/112
String.prototype.toKorChars = function() { 
  var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
  cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
  cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
   
  var str = this, 
      cnt = str.length, 
      chars = [], 
      cCode; 
  for (var i = 0; i < cnt; i++) { 
    cCode = str.charCodeAt(i); 
    if (cCode == 32) { 
      chars.push(" ");
      continue;
    } 
    // 한글이 아닌 경우 
    if (cCode < 0xAC00 || cCode > 0xD7A3) { 
      chars.push(str.charAt(i)); continue; 
    } 
    cCode = str.charCodeAt(i) - 0xAC00; 
 
    jong = cCode % 28; // 종성 
    jung = ((cCode - jong) / 28 ) % 21 // 중성 
    cho = (((cCode - jong) / 28 ) - jung ) / 21 // 초성 
 
    //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
    // chars.push(cCho[cho], cJung[jung]); 
    // if (cJong[jong] !== '') { 
    //     chars.push(cJong[jong]); 
    //     } 
 
 
    //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
    chars.push(cCho[cho]);
    chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
    if (cJong[jong] !== '') { 
       chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
    }
            
  } 
  return chars; 
 }
 
 
 //타이핑할 문장
    var result  = "투 두 리스트....!";
    var typeing1=[];
    result = result.split(''); // 한글자씩자름
 
    //각글자 초성,중성,종성으로 나눔
    for(var i =0; i<result.length; i++){
      typeing1[i]=result[i].toKorChars();
    }
 
    //출력할 엘리먼트요소 가져옴 
    var resultDiv = document.getElementsByClassName("result")[0];
 
    var text = "";
    var i=0; 
    var j=0; 
 
    //총글자수
    var imax = typeing1.length;
 
    //setInterval을 이용해 반복적으로 출력 
    var inter = setInterval(typi,150);
 
 
    function typi(){
      //글자수만큼 반복후 종료 
      if(i<=imax-1){
        //각 글자가 초성 중성 종성 순서대로 추가되도록 
        var jmax = typeing1[i].length;
        resultDiv.innerHTML = text + typeing1[i][j];
        j++;
        if(j==jmax){
          text+=typeing1[i][j-1];
          //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
          i++;
          j=0;
         }
       } else{
         clearInterval(inter);
       }
     }