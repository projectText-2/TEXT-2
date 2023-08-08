// // 공통 헤더 푸터 인클루드
// window.addEventListener('load', function() {
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status == 200) {
//                     el.outerHTML = this.responseText;
//                 }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });
// });
$(document).ready(function(){
    // 검색 변수
    const $search = $("#head .search");
    const $searchInput = $("#head .search input[type=text]");
    const $searchLayer = $(".search-layer");
    const $searchLayerBg = $(".search-layer .bg");
    const $delBtn = $(".search .del_btn");
    // 카테 변수
    const $cateBtn = $(".cate");
    const $cateLayer = $(".cate-layer");
    const $cateLayerBg = $(".cate-layer .bg");

    // 검색 레이어 오픈
    $($searchInput).on("click",()=>{
        $search.addClass("active");
        $searchLayer.fadeIn("fast");
        $cateLayer.fadeOut("fast");
    });
    // 검색 배경 클릭 시 레이어 close
    $($searchLayerBg).on("click",()=>{
        $searchLayer.fadeOut("fast");
        $search.removeClass("active");
    })
    // 검색 x버튼 클릭 시 입력값 삭제
    $delBtn.on("click",()=>{
        $searchInput.val("");
    })
    
    // 카테고리 레이어 오픈
    $($cateBtn).on("click",()=>{
        $cateLayer.fadeIn("fast");
        $searchLayer.fadeOut("fast");
    });
    $($cateLayerBg).on("click",()=>{
        $cateLayer.fadeOut("fast");
    });

    //footer nav
    $(".foot-nav li").on("click",function () {
        // let imgAttr = $(this).find("img").attr("src");
        // let changeImgAttr = $(this).find("img").attr("src").replace(".svg","_on.svg");

        $(".foot-nav li").not(this).removeClass("active");
        // $(this).find("img").attr("src",changeImgAttr);
        $(this).addClass("active");
    })
});
