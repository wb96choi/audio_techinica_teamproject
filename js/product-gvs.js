// 2 depth 메뉴
$(function () {
  // all
  // $('.btn-all').click(function(){
  //   $('.depth2 button').addClass('on');
  // });

  // headphone
  $('.btn-headphone').click(function () {
    $('.depth2 button').removeClass('on');

    // 버튼선택자 for 비교
    $('.depth2 button').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('headphone');
      if (bool) {
        $(this).addClass('on');
      }
    })
  });

  // earphone
  $('.btn-earphone').click(function () {
    $('.depth2 button').removeClass('on');

    // 버튼선택자 for 비교
    $('.depth2 button').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('earphone');
      if (bool) {
        $(this).addClass('on');
      }
    })
  });

  // Tuentable/Speaker
  $('.btn-tt-sp').click(function () {
    $('.depth2 button').removeClass('on');

    // 버튼선택자 for 비교
    $('.depth2 button').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('tt-sp');
      if (bool) {
        $(this).addClass('on');
      }
    })
  });

  // mic
  $('.btn-mc').click(function () {
    $('.depth2 button').removeClass('on');

    // 버튼선택자 for 비교
    $('.depth2 button').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('mc');
      if (bool) {
        $(this).addClass('on');
      }
    })
  });


});


$(function () {
  // all
  $('.btn-all').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li .btn-all').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('a11');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });

  // headphone
  $('.btn-headphone').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('bhd');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });

  // earphone
  $('.btn-earphone').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('bep');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });

  // TT/SP
  $('.btn-tt-sp').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('tsp');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });

  // mic
  $('.btn-mc').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('mcp');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });

  // earphone
  $('.btn-earphone').click(function () {
    $('.depth1 li').removeClass('textActive');

    // 버튼선택자 for 비교
    $('.depth1 li').each(function (i) {
      console.log(i);// 배열
      let button = $(this);
      console.log(button);
      let bool = $(this).hasClass('bep');
      if (bool) {
        $(this).addClass('textActive');
      }
    })
  });


});


// 서버에 제품 데이터 요청(data request)(가져오기)
function getData() {
  // 
  const DataURL = 'https://raw.githubusercontent.com/ASBEN1/2022.07.12_Team_Project_only_json/main/data.json';
  //'깃허브 주소 (깃허브에 올린 json 파일(경로) 항목을 눌러서 row를 누른다 그 다음 주소를 복붙)'
  fetch(DataURL)
    .then(function (res) {
      return res.json(); // JSON 객체 변환
    })
    .then(function (obj) {
      // obj 데이터
      showProducts_gvs(obj);
      console.log(obj);
    });
};


function showProducts_gvs(obj) {

  // URL quary parameter(매개변수)
  const quary = location.search;
  console.log(quary);
  // ? URL quary문을 object(변수)로 변경 -> html 에서도
  let params = new URLSearchParams(quary).get('category');
  let paramsMG = new URLSearchParams(quary).get('mainGroup');

  // const는 상수라 변경이 불가라서 let으로 변경해준다

  // ★★★★★★★★★★★★★★ 전체 메뉴 ★★★★★★★★★★★★★★★★★

  // 번호 부여해서 active(addClass) 추가

  let tabNo = 0;
  if (params == 'all') {
    tabNo = 0;
  } else if (params == '무선이어폰') {
    tabNo = 2;
  }
  else if (params == '유선이어폰') {
    tabNo = 3;
  }
  else if (params == '무선헤드폰') {
    tabNo = 0;
  }
  else if (params == '유선헤드폰') {
    tabNo = 1;
  }
  else if (params == '스피커') {
    tabNo = 5;
  }
  else if (params == '마이크') {
    tabNo = 6;
  }
  else if (params == '턴테이블') {
    tabNo = 4;
  }

  console.log('tabNo = ', tabNo);

  $('.depth2 .bt1').eq(tabNo).addClass('active');


  // ☆ params == null 이면 시작 페이지 "전체보기" 출력 ☆
  if (params == null || params == 'all') { // || = or
    params = null;
  };
  console.log(params);


  // ★★★★★★★★★★★★★★ 세부 메뉴 ★★★★★★★★★★★★★★★★★

  // 상품 데이터 출력 [forEach() 반복문]
  obj.forEach(function (product, i) {
    //                   제품, 배열(번호) 데이터

    // 카테고리 구분 wireless | 무선헤드폰 | 유선헤드폰
    // 요청한 params와 product.category 명이 일치하는 데이터만 출력한다.

    //let category = product.category;
    let name = product.name;
    let price = product.price;
    let imgUrl = product.imgUrl;
    let text = product.text;
    let mainGroup = product.mainGroup;

    
    
    

    // 전체x "분류별 상품 보기"
    if (params == product.category) {
      //                     data-id=~ = 사용자 정의 id
      let html = `
        <div class="productG" data-id=${i}>
          <a href="./products-detail.html?id=${i}">

            <img src="${imgUrl}" alt="${name}">

            <div class="info0">
              <p class="prd-title0">${name}</p>
              <p class="price0">&#8361 ${price}</p>
              <p class="explain0">${text}</p>
            </div>

          </a>
        </div>
    `
      $('#products-gvs .row0').append(html);
    }

    // 분류없이 상품 "전체보기"
    if (params == null) {

      let html = `
        <div class="productG" data-id=${i}>
          <a href="./products-detail.html?id=${i}">

            <img src="${imgUrl}" alt="${name}">

            <div class="info0">
              <p class="prd-title0">${name}</p>
              <p class="price0">&#8361 ${price}</p>
              <p class="explain0">${text}</p>
            </div>

          </a>
        </div>
    `
      $('#products-gvs .row0').append(html);
      /*console.log(`i = `, i);*/
    };

  });

}



$(function () {
  getData();
});
