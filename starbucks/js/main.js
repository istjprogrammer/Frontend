const searchEl = document.querySelector('.search') //search라는 클래스에 접근
const searchInputEl = document.querySelector("input")

searchEl.addEventListener("click", () => {
    searchInputEl.focus()
})//클릭했을 때 focus가 실행되는 것(자동으로 입력창 크기 증가)

searchInputEl.addEventListener("focus", () => {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute("placeholder", "통합검색")
})//검색창에 통합검색이라는 메세지가 뜨는 기능

searchInputEl.addEventListener("blur", () => {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute("placeholder", "")
})//검색창에 커서를 놓으면 자동으로 통합검색이라는 단어가 사라지게 하는 기능

const badgeEl = document.querySelector('header .badges')//항상 접근이 되어 있어야 하고 선택이 되어 있어야 한다.


/*lodash cdn 검색*/
window.addEventListener("scroll", _.throttle(() => {
    console.log(window.scrollY/*현재 스크롤의 위치를 나타내는 함수*/)
    if (window.scrollY > 500) {
        badgeEl.style.display = 'none';/*스크롤 위치가 어느정도 내려가면 벳지를 숨기는 기능*/
    }

    else {
        // Badge 요소 보이기!
        gsap.to(badgeEl, .6, { opacity: 1, display: 'block' })
    }
}, 300/*0.3초 간격으로 호출*/))
/*핸들을 당기면 실행되게 하는 쓰로틀 함수(적절한 속도조절)*/
//scroll이라는 이벤트 등록, scroll이 일어나면 특정 기능이 실행되는 함수

/* gsap cdn 검색(애니메이션을 자연스럽게 나타낼 수 있는 기능) */
window.addEventListener("scroll", _.throttle(() => {
    console.log(window.scrollY/*현재 스크롤의 위치를 나타내는 함수*/)
    if (window.scrollY > 500) {
        /*gsap.to(요소, 지속시간, 옵션), 어떤 요소를 얼마동안 어떻게 나타낼 것인지를 정의*/
        gsap.to(badgeEl, .6, { opacity: 0, display: none })/*0.6초만에 사라졌다가 나타나게 하는 기능*/
        gsap.to(toTopEl, .2, { x: 0 })
    }

    else {
        gsap.to(badgeEl, .6, { opacity: 1, display: block })
        gsap.to(toTopEl, .2, { x: 100 })
    }
}, 300/*0.3초 간격으로 호출*/))

/* Visual Image를 순차적으로 나타나게 하는 기능 */
const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach((el, cnt) => {
    gsap.to(el, 1, { opacity: 1, delay: (cnt + 1) * .7 })/*el이라는 요소를 1초만큼 투명도를 없애고 나타나게끔 하는 효과*/
})







/*슬라이드 요소 관리*/
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: true
})

new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 2000
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true/*클릭했을 때 눌릴 수 있도록 하는 설정*/
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    }
})


new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
        nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
})



//슬라이더 기능 추가

/* Promotion 슬라이드 토글 기능 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
    isHidePromotion = !isHidePromotion
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
        // 요소가 보여야 하면,
    } else {
        promotionEl.classList.remove('hide')
    }
})

/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        {
            delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
            y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
            repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
            yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
            ease: Power1.easeInOut // Easing 함수 적용.
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({ // 감시할 장면(Scene)을 추가
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
