/* 카테필터 */
const $cateFilter = $(".result .cate-filter");
const $cateFilterList = $(".cate-filter .list");
const $cateFilterListBtn = $(".cate-filter .list button")
const $cateArrow = $(".cate-arrow");
const $cateNameArea = $(".cate-tit");

$cateFilter.on("click",function () {
    $cateFilterList.toggle();
    $cateArrow.toggleClass("active");
})

$cateFilterListBtn.on("click",function () {
    let $listVal = $(this).text();
    $cateNameArea.text($listVal);
})