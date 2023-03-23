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

  // 오른쪽 배너를 일정 이상 스크롤하면 사라지게 만들기!
  const badgeEl = document.querySelector('header .badges');
  const toTopEl = document.querySelector('#to-top');
  
  window.addEventListener('scroll', _.throttle(function () {
    // console.log(window, scrollY);
  if (window,scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display:'none'
    });
    //버튼 보이기 추가(마지막)
    gsap.to(toTopEl, .2, {
      x: 0
    })
    //버튼 보이기 추가 끝!
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display:'block'
    });
    // 버튼 숨기기 추가(마지막)
    // 이렇게 CSS 선택자를 써도 쓸 수 있음.
    gsap.to(toTopEl, .2, { // CSS선택자로 찾을 수 있고, 변수 할당한 것으로 찾을 수도 있음.
      x: 100
    })
    // 버튼 숨기기 추가 끝!
  }
}, 300));


toTopEl.addEventListener('click',function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


  // window: 브라우저 창(페이지 열려있는 탭), 보고있는 화면 자체 의미
  // 화면이 많이 움직일수록 스크롤 값 올라감, 결국 페이지가 무거워져서 렉걸림
  // 실행되는 함수의 수를 외부에서 가져오는 라이브러리 사용함!(index파일 script)
  // throttle이라는 메소드 사이에서 함수 실행. 300은 0.3초.(ms단위임)
  // 일정 시간동안 한 번만 작동하도록 하는 것! throttle은 자주 사용됨.
  // _.throttle(함수, 시간)
  // scrollY 값: 지금 세로로 몇 픽셀 지점인지 값으로 나타내기.
  // 그래서 만약 scrollY 값이 500넘으면 배지들 요소의 display를 none으로 해서 안보이게.
  // 움직임 자연스럽게 하기 위해 애니메이션 라이브러리를 사용. (gsap),이 또한 index html파일에 넣기
  // to라는 메소드 사용 gsap.to(요소, 지속시간(s단위), 옵션)
  // 이 때 만약 애니메이션만 사용할 경우에는 시각적으로만 사라지고, 요소 자체는 계속 남아있는 것을 확인할 수 있음
  // 따라서 요소 display가 none이 되는 것도 필요. -> 객체 데이터 안에 작성!



  // visual부분 순차적으로 보이도록 하기.
  // css에서 안보이게 해놓고 하나씩 나타나게.
const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간(s단위), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index +1) * .7, // 0.7, 1.4, 2.1, 2.8초에 동작!
    opacity: 1
  });  
});

// new: 자바스크립트 생성자(클래스); -> 여러 객체 다뤄낼 수 있음
// 소괄호 사이에 옵션 작성.(CSS 클래스 선택자, 옵션(객체데이터 형식))
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  // direction: 'horizontal' // 기본값
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드가 가운데에
  loop: true,
  // autoplay: {
  //   delay: 5000 //ms단위, 3000이 기본단위
  // },
  pagination : {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  } 
});
// 굉장히 많은 기능 가지고 있기 때문에, 현업에서도 자주 쓰임. 알아보면 좋음!

// 새 슬라이드 추가!(awards파트)
new Swiper('.awards .swiper-container', {
  // direction: 'horizental',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion // ! 뒤쪽의 값이 반대가 되게 만들기. (false가 true됨)
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // false니까 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// Github에서 발췌
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // gsap easing이라고 검색했을 때 뜨는 사이트 참고!(그래프 아래에 있는 코드의 객체 데이터 가져오기)
  // TweenMax가 우리가 쓰는 gsap과 같고, to라는 메소드 또한 동일.
  // 라이브러리를 가져올 때는 사용법(메소드?)을 꼭 확인해보기!
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //반복 횟수, -1은 무한반복
    yoyo: true, //한번 재생한 애니메이션 되감기
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// Scroll Magic 사용하기
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 요소가 화면에 보이는지, 보이지 않는지 감시함
  // setClassToggle: html 클래스 속성을 Toggle(넣엇다 뺏다)하는 기능
  // addTo: 스크롤매직의 컨트롤러 개념?
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정하기
      triggerHook: .8 
      // 세로 길이에서 뷰포트 시작부분이 0, 끝나는 부분을 1이라고 두는데, 0.8 지점에서 hook이 걸려져 있기 때문에, 이 부분에 걸리면 setClassToggle이 trigger(실행)됨
    })
    .setClassToggle(spyEl, 'show')
    // 실행할 변수, 실행할 클래스?
    .addTo(new ScrollMagic.Controller());
    // 스크롤 매직에서 추가한 옵션들을 내부 컨트롤러에 내용 할당해서 실제로 동작할 수 있는 구조로 만들어줌.
    
    // 가독성 위해 줄바꿈!
})


// 카피라이트에 년도 자동 계산하는 코드 알아보기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //글자 값 알아내거나 지정*하는 메소드, 체인된 메소드를 모두 실행하고 나면 2023이 나옴(올해)