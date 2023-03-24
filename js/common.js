// main.js에서 signin의 index.html과 메인 index.html에서 모두 사용하는 공통 내용을 담는 js.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// searchEl 안에서 찾음으로써 querySelector에서 .search input에서 .search 생략할 수 있게됨

searchEl.addEventListener('click', function() {
  searchInputEl.focus()
  // input 요소에 focus 강제적용 메소드
});

searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  // focus되고 나면 search 자체에 focused 클래스 추가
  searchInputEl.setAttribute('placeholder', '통합검색');
  // set(설정) Attribute(속성) 첫번째 인수: 속성 이름, 두번째 인수: 속성에 들어갈 값.
});

searchInputEl.addEventListener('blur',function() {
  // focus 해제된 게 blur
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // placeholder 텍스트 없애기
  });


  
// 카피라이트에 년도 자동 계산하는 코드 알아보기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //글자 값 알아내거나 지정*하는 메소드, 체인된 메소드를 모두 실행하고 나면 2023이 나옴(올해)